import React from "react";

export default function BgText({ className, text }) {
  return (
    <div
      className={`${className} fixed z-0 text-7xl opacity-10 top-1/2 right-20`}
    >
      {text}
    </div>
  );
}
