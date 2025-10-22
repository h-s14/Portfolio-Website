"use client";

import { forwardRef, useState, type FormEvent } from "react";

type ContactFormDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type SubmissionStatus = {
  success: boolean;
  message: string;
} | null;

type ContactUsProps = {
  sharedBg?: boolean;
};

const formInitialDetails: ContactFormDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const ContactUs = forwardRef<HTMLDivElement, ContactUsProps>(({ sharedBg }, ref) => {
  const [formDetails, setFormDetails] = useState<ContactFormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<SubmissionStatus>(null);

  const onFormUpdate = (category: keyof ContactFormDetails, value: string) => {
    setFormDetails((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();
      setFormDetails(formInitialDetails);

      if (response.ok && result?.success) {
        setStatus({ success: true, message: result.message ?? "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: result?.message ?? "Something went wrong, message not sent",
        });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Something went wrong, message not sent",
      });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <div
      ref={ref}
      className={`${sharedBg ? "" : "bg-skills-bg dark:bg-grad-dark"} flex h-full flex-col flex-wrap items-center justify-center py-20 md:flex-row`}
    >
      <div className="mx-3 my-3 hidden items-center justify-center rounded-3xl md:flex md:w-[40%]">
        <span className="flex dark:hidden">
          <img className="w-[80%] p-2" src="/contact-light.png" alt="message illustration" />
        </span>
        <span className="hidden dark:flex">
          <img className="w-[80%] p-2" src="/contact-dark.png" alt="message illustration" />
        </span>
      </div>

      <div className="flex w-[90%] flex-wrap justify-center rounded-3xl bg-gray-300 bg-opacity-30 p-5 backdrop-blur-md md:w-[50%]">
        <div className="my-4 flex w-full justify-center text-5xl font-bold">Get In Touch</div>
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-center">
          <div className="relative mx-2 my-4 flex h-16 w-full items-center md:w-[40%] 2xl:w-[44%]">
            <input
              type="text"
              placeholder="First Name"
              value={formDetails.firstName}
              onChange={(event) => onFormUpdate("firstName", event.target.value)}
              className="h-full w-full rounded-lg border-2 border-t-light border-opacity-20 bg-transparent pl-10 pr-5 text-t-light placeholder-t-light outline-none focus:border-blue-500 dark:border-t-dark dark:text-t-dark dark:placeholder-t-dark dark:focus:border-yellow-500"
              required
            />
          </div>

          <div className="relative mx-2 my-4 flex h-16 w-full items-center md:w-[40%] 2xl:w-[44%]">
            <input
              type="text"
              placeholder="Last Name"
              value={formDetails.lastName}
              onChange={(event) => onFormUpdate("lastName", event.target.value)}
              className="h-full w-full rounded-lg border-2 border-t-light border-opacity-20 bg-transparent pl-10 pr-5 text-t-light placeholder-t-light outline-none focus:border-blue-500 dark:border-t-dark dark:text-t-dark dark:placeholder-t-dark dark:focus:border-yellow-500"
              required
            />
          </div>

          <div className="relative mx-2 my-4 flex h-16 w-full items-center md:w-[40%] 2xl:w-[44%]">
            <input
              type="email"
              placeholder="Email"
              value={formDetails.email}
              onChange={(event) => onFormUpdate("email", event.target.value)}
              className="h-full w-full rounded-lg border-2 border-t-light border-opacity-20 bg-transparent pl-10 pr-5 text-t-light placeholder-t-light outline-none focus:border-blue-500 dark:border-t-dark dark:text-t-dark dark:placeholder-t-dark dark:focus:border-yellow-500"
              required
            />
          </div>

          <div className="relative mx-2 my-4 flex h-16 w-full items-center md:w-[40%] 2xl:w-[44%]">
            <input
              type="tel"
              placeholder="Phone no."
              value={formDetails.phone}
              onChange={(event) => onFormUpdate("phone", event.target.value)}
              className="number-input no-spinner h-full w-full rounded-lg border-2 border-t-light border-opacity-20 bg-transparent pl-10 pr-5 text-t-light placeholder-t-light outline-none focus:border-blue-500 dark:border-t-dark dark:text-t-dark dark:placeholder-t-dark dark:focus:border-yellow-500"
            />
          </div>

          <div className="relative mx-2 my-4 flex w-full justify-center md:mx-8 lg:mx-14 2xl:mx-11">
            <textarea
              rows={5}
              placeholder="Message"
              value={formDetails.message}
              onChange={(event) => onFormUpdate("message", event.target.value)}
              className="h-full w-full rounded-lg border-2 border-t-light border-opacity-20 bg-transparent pl-10 pr-5 pt-5 text-t-light placeholder-t-light outline-none focus:border-blue-500 dark:border-t-dark dark:text-t-dark dark:placeholder-t-dark dark:focus:border-yellow-500"
              required
            />
          </div>

          <div className="my-2 flex justify-center">
            <button
              type="submit"
              className="dark:bg-send-bg-dark bg-send-bg-light w-44 rounded-lg bg-opacity-60 px-2 py-2 text-t-light transition-colors hover:bg-opacity-80 dark:bg-opacity-60 dark:text-t-dark dark:hover:bg-opacity-80"
            >
              {buttonText}
            </button>
          </div>
        </form>
        {status?.message && (
          <div className={`mt-4 text-center text-lg ${status.success ? "text-green-600" : "text-red-600"}`}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
});

ContactUs.displayName = "ContactUs";

export default ContactUs;
