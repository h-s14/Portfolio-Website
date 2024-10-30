import { React, useState, forwardRef } from "react";

const ContactUs = forwardRef((props, ref) => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });

    const handleSubmit = async (e) => {
      e.preventDefaults();
      let response = await fetch("https://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utff-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, message not sent",
        });
      }
    };
  };
  return (
    <>
      <div className="flex h-full flex-col flex-wrap items-center justify-center py-20 md:flex-row">
        <div className="mx-3 my-3 hidden items-center justify-center rounded-3xl md:flex md:w-[40%]">
          <span className="flex dark:hidden">
            <img
              className="w-[80%] p-2"
              src="contact-light.png"
              alt="message img"
            />
          </span>
          <span className="hidden dark:flex">
            <img
              className="w-[80%] p-2"
              src="contact-dark.png"
              alt="message img"
            />
          </span>
        </div>

        <div className="flex w-[90%] flex-wrap justify-center rounded-3xl bg-gray-300 bg-opacity-30 p-5 backdrop-blur-md md:w-[50%]">
          <div className="my-4 flex w-full justify-center text-5xl font-bold">
            Get In Touch
          </div>
          <form
            onSubmit={onFormUpdate}
            className="flex flex-wrap items-center justify-center"
          >
            {/* First Name Field */}
            <div className="relative mx-2 my-4 flex h-16 w-full items-center md:w-[40%] 2xl:w-[44%]">
              <input
                type="text"
                placeholder="First Name"
                value={formDetails.firstName}
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
                className="h-full w-full rounded-lg border-2 border-t-light border-opacity-20 bg-transparent pl-10 pr-5 text-t-light placeholder-t-light outline-none focus:border-blue-500 dark:border-t-dark dark:text-t-dark dark:placeholder-t-dark dark:focus:border-yellow-500"
              />
            </div>
            {/* Last Name Field */}
            <div className="relative mx-2 my-4 flex h-16 w-full items-center md:w-[40%] 2xl:w-[44%]">
              <input
                type="text"
                placeholder="Last Name"
                value={formDetails.lastName}
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
                className="h-full w-full rounded-lg border-2 border-t-light border-opacity-20 bg-transparent pl-10 pr-5 text-t-light placeholder-t-light outline-none focus:border-blue-500 dark:border-t-dark dark:text-t-dark dark:placeholder-t-dark dark:focus:border-yellow-500"
              />
            </div>
            {/* Email Name Field */}
            <div className="relative mx-2 my-4 flex h-16 w-full items-center md:w-[40%] 2xl:w-[44%]">
              <input
                type="Email"
                placeholder="Email"
                value={formDetails.email}
                onChange={(e) => onFormUpdate("email", e.target.value)}
                className="h-full w-full rounded-lg border-2 border-t-light border-opacity-20 bg-transparent pl-10 pr-5 text-t-light placeholder-t-light outline-none focus:border-blue-500 dark:border-t-dark dark:text-t-dark dark:placeholder-t-dark dark:focus:border-yellow-500"
              />
            </div>
            {/* Phone Number Field */}
            <div className="relative mx-2 my-4 flex h-16 w-full items-center md:w-[40%] 2xl:w-[44%]">
              <input
                type="number"
                placeholder="Phone no."
                value={formDetails.phone}
                onChange={(e) => onFormUpdate("phone", e.target.value)}
                className="number-input no-spinner h-full w-full rounded-lg border-2 border-t-light border-opacity-20 bg-transparent pl-10 pr-5 text-t-light placeholder-t-light outline-none focus:border-blue-500 dark:border-t-dark dark:text-t-dark dark:placeholder-t-dark dark:focus:border-yellow-500"
              />
            </div>
            {/* Message Field */}
            <div className="relative mx-2 my-4 flex w-full justify-center md:mx-8 lg:mx-14 2xl:mx-11">
              <textarea
                rows={5}
                type="text"
                placeholder="Message"
                value={formDetails.message}
                onChange={(e) => onFormUpdate("message", e.target.value)}
                className="text:black h-full w-full rounded-lg border-2 border-t-light border-opacity-20 bg-transparent pl-10 pr-5 pt-5 text-t-light outline-none focus:border-blue-500 dark:border-t-dark dark:text-t-dark dark:placeholder-t-dark dark:focus:border-yellow-500"
              />
            </div>
            {/* Send Button */}
            <div className="my-2 flex justify-center">
              <button
                type="submit"
                className="dark:bg-send-bg-dark bg-send-bg-light w-44 rounded-lg bg-opacity-60 px-2 py-2 text-t-light transition-colors hover:bg-opacity-80 dark:bg-opacity-60 dark:text-t-dark dark:hover:bg-opacity-80"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});

export default ContactUs;
