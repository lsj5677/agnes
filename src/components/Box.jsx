import React from "react";
import { Link } from "react-router-dom";

const KEY_STYLE = "text-blue";
const VALUE_STYLE = "inline-block text-teal-300 ml-3";
const CONSOLE_RESULT_STYLE =
  "border-t border-b border-mediumGray my-1 flex justify-between text-sm";

export default function Box({ className }) {
  return (
    <div
      className={`${className} text-left bg-black mt-10 h-80 rounded-t-3xl p-8 text-white dark:text-black shadow-[2px_-3px_14px_rgba(0,0,0,0.7)] dark:shadow-[2px_-3px_14px_rgba(249,248,241,0.7)]`}
    >
      <div>
        <span className="text-white">console</span>
        <span className="text-blue">.log</span>
        <span className="text-red">(</span>
        <span className="text-tranquilBlue">typeof</span>
        <span className="inline-block ml-2 text-white">Agnes</span>
        <span className="text-red">)</span>
        <span className="text-tranquilBlue">;</span>
      </div>
      <div className={`${CONSOLE_RESULT_STYLE} opacity-50`}>
        <span className="text-white">Person</span>
        <Link to="/contact" className="text-white">
          Contact.jsx
          <span className="block w-full h-0.5 -mt-1 bg-mediumGray"></span>
        </Link>
      </div>
      <div className="mt-5">
        <span className="text-white">console</span>
        <span className="text-blue">.log</span>
        <span className="text-red">(</span>
        <span className="text-white">Agnes</span>
        <span className="text-red">)</span>
        <span className="text-tranquilBlue">;</span>
      </div>
      <div className={`${CONSOLE_RESULT_STYLE} border-opacity-50`}>
        <div>
          <span className={KEY_STYLE}>0</span>
          <span className="text-white">:</span>
          <ul className="pl-3">
            <li>
              <span className={KEY_STYLE}>name</span>
              <span>:</span>
              <span className={VALUE_STYLE}>"Agnes Lee"</span>
            </li>
            <li>
              <span className={KEY_STYLE}>gender</span>
              <span>:</span>
              <span className={VALUE_STYLE}>"Female"</span>
            </li>
            <li>
              <span className={KEY_STYLE}>jobTitle</span>
              <span>:</span>
              <span className={VALUE_STYLE}>"Frontend developer"</span>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/contact" className="text-white opacity-50">
            Contact.jsx
            <span className="block w-full h-0.5 -mt-1 bg-mediumGray"></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
