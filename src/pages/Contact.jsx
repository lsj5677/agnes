import React from "react";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

const LINK_STYLE =
  "flex items-center justify-center gap-1 bg-beige max-w-xs py-2 dark:text-black rounded-md";

export default function Contact() {
  return (
    <div className="sub-wrap sub-layout">
      <div>
        <h3 className="font-bold text-8xl">Hello,</h3>
      </div>
      <ul className="my-10 text-lg">
        <li>
          If you have any questions, please do not hesitate to contact me
          anytime :)
        </li>
        <li className="mt-4 font-serif">
          <a href="mailto:lsj5677@gmail.com" className={LINK_STYLE}>
            <AiOutlineMail /> : <span>lsj5677@gmail.com</span>
          </a>
        </li>
      </ul>
      <span className="block text-center mb-10 opacity-50 sm:text-left">
        or
      </span>
      <ul className="text-lg">
        <li>If you want to see my details, click the link or icon below :)</li>
        <li className="mt-4 font-serif">
          <a
            href="https://www.linkedin.com/in/agnes-lee-041971189/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            className={LINK_STYLE}
          >
            <AiFillLinkedin /> : <span>LinkedIn Profile</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
