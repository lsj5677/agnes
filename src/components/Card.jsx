import React, { useState } from "react";
import { motion } from "framer-motion";

const BUTTON_STYLE =
  "inline-block py-2 px-6 border-1 border-black text-center rounded-sm hover:bg-red ease-in-out duration-200 dark:text-black";

export default function Card({
  title,
  thumbSrc,
  desc,
  gitSrc,
  siteSrc,
  period,
  tags,
}) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="relative bg-white mb-10 mx-auto rounded-md max-w-md shadow-[1px_-3px_14px_rgba(0,0,0,0.3)] dark:shadow-[2px_-3px_14px_rgba(249,248,241,0.7)] dark:bg-black">
      <div className="rounded-md overflow-hidden bg-lightGray min-h-[30%]">
        <motion.img
          src={thumbSrc}
          alt={title}
          initial={{ opacity: 0 }}
          animate={{
            opacity: imageLoading ? 0 : 1,
          }}
          transition={{ opacity: { delay: 0.1, duration: 0.4 } }}
          onLoad={() => setImageLoading(false)}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-center gap-4 my-5 text-black ">
          <a
            href={gitSrc}
            target="_blank"
            rel="noreferrer"
            className={`${BUTTON_STYLE} bg-digitalLavender`}
          >
            source
          </a>
          <a
            href={siteSrc}
            target="_blank"
            rel="noreferrer"
            className={`${BUTTON_STYLE} bg-tranquilBlue`}
          >
            website
          </a>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-xs opacity-40">{period}</span>
        </div>
        <p className="my-2">{desc}</p>
        <div>
          {tags.map((tag, id) => (
            <span
              key={id}
              className="inline-block text-xs bg-lightGray mr-1.5 px-1.5 rounded-sm dark:text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
