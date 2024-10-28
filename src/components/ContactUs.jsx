import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="flex w-full flex-wrap py-20">
        <div className="w-[50%] bg-red-500 px-10 py-10">
          <img
            className="h-full w-full bg-gray-400"
            src="/message.png"
            alt="message img"
          />
        </div>

        <div className="flex w-[50%] flex-wrap justify-center">
          <div className="w-full text-5xl font-bold">Get In Touch</div>
          {/* First Name Field */}
          <div className="relative m-2 flex h-16 w-[40%] items-center">
            <input
              type="text"
              className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 placeholder-gray-600 outline-none focus:border-blue-500 dark:text-gray-500 dark:placeholder-gray-500"
              placeholder="First Name"
            />
          </div>
          {/* Last Name Field */}
          <div className="relative m-2 flex h-16 w-[40%] items-center">
            <input
              type="text"
              className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 placeholder-gray-600 outline-none focus:border-blue-500 dark:text-gray-500 dark:placeholder-gray-500"
              placeholder="Last Name"
            />
          </div>
          {/* Email Name Field */}
          <div className="relative m-2 flex h-16 w-[40%] items-center">
            <input
              type="Email"
              className="h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 placeholder-gray-600 outline-none focus:border-blue-500 dark:text-gray-500 dark:placeholder-gray-500"
              placeholder="Email"
            />
          </div>
          {/* Phone Number Field */}
          <div className="relative m-2 flex h-16 w-[40%] items-center">
            <input
              type="number"
              className="number-input no-spinner h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 text-gray-600 placeholder-gray-600 outline-none focus:border-blue-500 dark:text-gray-500 dark:placeholder-gray-500"
              placeholder="Phone no."
            />
          </div>
          {/* Address Field */}
          <div className="relative m-7 flex w-[82%]">
            <textarea
              rows={5}
              type="text"
              className="text:black h-full w-full rounded-lg border-2 border-black border-opacity-20 bg-transparent pl-10 pr-5 pt-5 text-gray-600 placeholder-gray-600 outline-none focus:border-blue-500 dark:text-gray-500 dark:placeholder-gray-500"
              placeholder="Message"
            />
          </div>
          {/* Send Button */}
          <div className="my-2 flex justify-center">
            <button
              type="submit"
              className="w-28 rounded-lg bg-red-500 bg-opacity-60 px-2 py-2 text-white transition-colors hover:bg-opacity-80"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
