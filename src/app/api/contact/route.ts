import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactRequest = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const buildTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactRequest;
  const { firstName = "", lastName = "", email = "", phone = "", message = "" } = body;

  if (!email || !message) {
    return NextResponse.json(
      { success: false, message: "Email and message are required." },
      { status: 400 }
    );
  }

  const transporter = buildTransporter();

  if (!transporter) {
    return NextResponse.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 }
    );
  }

  try {
    await transporter.verify();

    const mailOptions = {
      from: `${firstName} ${lastName}`.trim() || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO ?? process.env.EMAIL_USER,
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong, message not sent" },
      { status: 500 }
    );
  }
}
