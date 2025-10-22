"use client";

import { forwardRef, useMemo, useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

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

  const highlights = useMemo(
    () => [
      {
        icon: Mail,
        title: "Quick responses",
        description: "Drop a message anytime — I usually reply within a couple of business days.",
      },
      {
        icon: MapPin,
        title: "Based in India",
        description: "Collaborating with teams worldwide on remote-friendly products and ideas.",
      },
      {
        icon: Phone,
        title: "Let's talk",
        description: "Happy to schedule a call to explore how I can help with your next challenge.",
      },
    ],
    []
  );

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
    <section
      ref={ref}
      id="contact"
      className={`${sharedBg ? "" : "bg-skills-bg dark:bg-grad-dark"} relative flex justify-center overflow-hidden py-20`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-5%] top-6 h-52 w-52 rounded-full bg-emerald-300/20 blur-3xl dark:bg-amber-400/20" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-64 w-64 rounded-full bg-purple-400/20 blur-3xl dark:bg-orange-400/20" />
      </div>

      <div className="relative flex w-full max-w-6xl flex-col gap-12 rounded-[2.5rem] border border-white/10 bg-white/5 px-6 py-16 shadow-2xl backdrop-blur-2xl dark:border-white/5 dark:bg-white/5 sm:px-10 lg:flex-row lg:items-stretch lg:px-16">
        <div className="flex flex-1 flex-col gap-6">
          <div className="hidden items-center justify-center md:flex">
            <span className="flex dark:hidden">
              <img className="w-[80%] max-w-sm" src="/contact-light.png" alt="message illustration" />
            </span>
            <span className="hidden dark:flex">
              <img className="w-[80%] max-w-sm" src="/contact-dark.png" alt="message illustration" />
            </span>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl dark:border-white/5 dark:bg-white/10">
            <h2 className="text-3xl font-semibold text-t-light dark:text-t-dark">Let&apos;s collaborate</h2>
            <p className="mt-3 text-sm text-t-light text-opacity-70 dark:text-t-dark dark:text-opacity-70">
              Tell me about your product vision, the problem you&apos;re solving, or the team you&apos;re building. I love working on meaningful experiences that balance performance, accessibility, and storytelling.
            </p>

            <ul className="mt-6 space-y-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm shadow-inner dark:border-white/10 dark:bg-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300/20 text-emerald-200 dark:bg-amber-400/20 dark:text-amber-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-left">
                    <p className="font-semibold text-t-light dark:text-t-dark">{title}</p>
                    <p className="mt-1 text-xs text-t-light text-opacity-70 dark:text-t-dark dark:text-opacity-70">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-1 flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl dark:border-white/5 dark:bg-white/10">
          <div className="mb-6 flex flex-col gap-2 text-center">
            <span className="mx-auto inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-t-light text-opacity-80 dark:border-white/5 dark:bg-white/20">
              Contact
            </span>
            <h2 className="text-3xl font-semibold text-t-light dark:text-t-dark">Send a message</h2>
            <p className="text-sm text-t-light text-opacity-70 dark:text-t-dark dark:text-opacity-70">
              Share a few details and I&apos;ll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-t-light text-opacity-80 dark:text-t-dark dark:text-opacity-80">
                First Name
                <input
                  type="text"
                  placeholder="Jane"
                  value={formDetails.firstName}
                  onChange={(event) => onFormUpdate("firstName", event.target.value)}
                  className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm text-t-light placeholder:text-t-light/60 transition focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 dark:border-white/10 dark:bg-white/10 dark:text-t-dark dark:placeholder:text-t-dark/60 dark:focus:border-amber-300 dark:focus:ring-amber-300/40"
                  required
                  autoComplete="given-name"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-t-light text-opacity-80 dark:text-t-dark dark:text-opacity-80">
                Last Name
                <input
                  type="text"
                  placeholder="Doe"
                  value={formDetails.lastName}
                  onChange={(event) => onFormUpdate("lastName", event.target.value)}
                  className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm text-t-light placeholder:text-t-light/60 transition focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 dark:border-white/10 dark:bg-white/10 dark:text-t-dark dark:placeholder:text-t-dark/60 dark:focus:border-amber-300 dark:focus:ring-amber-300/40"
                  required
                  autoComplete="family-name"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-t-light text-opacity-80 dark:text-t-dark dark:text-opacity-80">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formDetails.email}
                  onChange={(event) => onFormUpdate("email", event.target.value)}
                  className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm text-t-light placeholder:text-t-light/60 transition focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 dark:border-white/10 dark:bg-white/10 dark:text-t-dark dark:placeholder:text-t-dark/60 dark:focus:border-amber-300 dark:focus:ring-amber-300/40"
                  required
                  autoComplete="email"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-t-light text-opacity-80 dark:text-t-dark dark:text-opacity-80">
                Phone (optional)
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  value={formDetails.phone}
                  onChange={(event) => onFormUpdate("phone", event.target.value)}
                  className="h-14 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm text-t-light placeholder:text-t-light/60 transition focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 dark:border-white/10 dark:bg-white/10 dark:text-t-dark dark:placeholder:text-t-dark/60 dark:focus:border-amber-300 dark:focus:ring-amber-300/40"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-t-light text-opacity-80 dark:text-t-dark dark:text-opacity-80">
              Message
              <textarea
                rows={5}
                placeholder="Tell me about your project or idea..."
                value={formDetails.message}
                onChange={(event) => onFormUpdate("message", event.target.value)}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-t-light placeholder:text-t-light/60 transition focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/40 dark:border-white/10 dark:bg-white/10 dark:text-t-dark dark:placeholder:text-t-dark/60 dark:focus:border-amber-300 dark:focus:ring-amber-300/40"
                required
              />
            </label>

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-send-bg-light px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-t-light shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-send-bg-light/90 dark:border-white/5 dark:bg-send-bg-dark dark:text-t-dark dark:hover:bg-send-bg-dark/90"
              >
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                {buttonText}
              </button>
            </div>
          </form>

          {status?.message && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-4 rounded-2xl border px-4 py-3 text-center text-sm font-medium ${status.success ? "border-emerald-300/50 text-emerald-200" : "border-red-300/50 text-red-200"}`}
            >
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

ContactUs.displayName = "ContactUs";

export default ContactUs;
