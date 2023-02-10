import React from "react";
import { motion } from "framer-motion";

export default function Experience({
  id,
  role,
  company,
  period,
  location,
  desc,
  techUsed,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-20px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      viewport={{ once: true }}
      className="mt-5 pt-5 border-t border-lightGray cursor-default"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-bold">{role}</h4>
        <span className="text-sm">{period}</span>
      </div>
      <div className="text-sm italic opacity-50">
        <span>{company}</span>
        <span className="inline-block mx-2">|</span>
        <span>{location}</span>
      </div>
      <ul className="mt-3">
        {desc.map((item, id) => (
          <li key={id} className="my-1">
            - {item}
          </li>
        ))}
        <li className="mt-3">
          <span className="block text-sm font-bold">Technology used: </span>
          {techUsed.map((item, id) => (
            <span
              key={id}
              className="inline-block text-xs bg-lightGray mr-1.5 px-1.5 rounded-sm dark:text-black"
            >
              {item}
            </span>
          ))}
        </li>
      </ul>
    </motion.div>
  );
}
