import { NextResponse, type NextRequest } from "next/server";
import type { Transporter } from "nodemailer";

export const runtime = "nodejs";

let nodemailerModulePromise: Promise<typeof import("nodemailer")> | null = null;

const loadNodemailer = async () => {
  if (!nodemailerModulePromise) {
    nodemailerModulePromise = import("nodemailer");
  }

  const { default: nodemailer } = await nodemailerModulePromise;
  return nodemailer;
};

type ContactRequest = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const buildTransporter = async (): Promise<Transporter | null> => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    return null;
  }

  const nodemailer = await loadNodemailer();

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
};

export async function POST(request: NextRequest) {
  const body = (await request.json()) as ContactRequest;
  const { firstName = "", lastName = "", email = "", phone = "", message = "" } = body;
  const trimmedFirstName = firstName.trim();
  const trimmedLastName = lastName.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();
  const trimmedMessage = message.trim();

  if (!trimmedEmail || !trimmedMessage) {
    return NextResponse.json(
      { success: false, message: "Email and message are required." },
      { status: 400 }
    );
  }

  const transporter = await buildTransporter();

  if (!transporter) {
    return NextResponse.json(
      { success: false, message: "Email service is not configured." },
      { status: 500 }
    );
  }

  try {
    await transporter.verify();

    const mailOptions = {
      from: `${trimmedFirstName} ${trimmedLastName}`.trim() || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO ?? process.env.EMAIL_USER,
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p>Name: ${trimmedFirstName} ${trimmedLastName}</p>
        <p>Email: ${trimmedEmail}</p>
        <p>Phone: ${trimmedPhone}</p>
        <p>Message: ${trimmedMessage}</p>
      `,
    } satisfies Parameters<Transporter["sendMail"]>[0];

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
