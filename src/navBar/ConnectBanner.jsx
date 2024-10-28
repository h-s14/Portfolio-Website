import { Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const ConnectBanner = () => {
  return (
    <>
      <div className="top-18 absolute right-28 h-10 w-10 rotate-45 bg-black">
        <div className=""></div>
      </div>
      <div className="absolute right-16 top-20">
        <ul className="flex w-36 flex-col items-center gap-4 rounded-2xl border-2 border-black bg-blue-300 py-3">
          <li className="flex w-full justify-between gap-4 px-4">
            Mail
            <Mail />
          </li>
          <li className="flex w-full justify-between gap-4 px-4">
            Linkein
            <Linkedin />
          </li>
          <li className="flex w-full justify-between gap-4 px-4">
            Twitter
            <Twitter />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ConnectBanner;
