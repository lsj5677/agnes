import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Box from "../components/Box";

const LINK_STYLE =
  "inline-block border border-black dark:border-beige w-32 text-center rounded-full py-3 box-border hover:bg-black hover:text-white dark:hover:bg-beige dark:hover:text-black transition ease-in-out duration-150";

export default function Main() {
  return (
    <main className="sub-wrap sub-layout relative min-h-screen">
      <motion.span
        initial={{ opacity: 0, x: "10vw" }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ delay: 0.3, duration: 1, type: "spring", bounce: 0.6 }}
        className="hidden md:block absolute text-lg uppercase top-3 right-10 bottom opacity-30"
      >
        Front end developer
      </motion.span>
      <motion.div
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.6 }}
        className="sm:flex gap-10 items-end text-right tracking-tighter"
      >
        <div className="text-8xl font-bold sm:text-9xl">
          <h2>AGNES</h2>
          <span className="inline-block italic sm:-mr-14">LEE</span>
          <div className="text-beige text-sm text-left py-3 pl-3 w-full h-10 bg-red -mt-10"></div>
          <span className="block w-0.5 h-32 mt-20 ml-2 bg-black dark:bg-beige"></span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "10vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="my-16 text-lg md:max-w-lg lg:max-w-4xl"
      >
        <h4 className="font-bold text-4xl mb-5 lg:text-7xl">About</h4>
        <p className="lg:text-xl lg:leading-8 lg:my-10">
          I have worked in the industries such as <strong>E-Commerce</strong>{" "}
          and <strong>marketing agency</strong>. I experienced in a range from
          designing to developing and building websites, releasing them to
          customers, also maintaining as well.
        </p>
        <Link
          to="/about"
          className="block w-full mt-5 ml-auto text-center w-full rounded-sm bg-red py-2.5 text-beige hover:bg-lusciousRed lg:max-w-md lg:ml-0"
        >
          More
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "10vh" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 1 }}
        viewport={{ once: true }}
        className="my-20 text-md text-right md:max-w-xl md:ml-auto lg:max-w-5xl lg:ml-auto lg:mt-40 xl:max-w-7xl"
      >
        <h4 className="font-bold text-4xl mb-5 lg:text-7xl">Get in touch</h4>
        <div className="lg:flex items-center gap-5 lg:text-left lg:w-full">
          <div className="lg:max-w-md lg:pl-6">
            <p className="text-lg">
              I started my career from web design and now I am a front-end
              developer. Furthermore, I am on the road to become a full stack
              developer.
            </p>
            <div className="flex gap-5 justify-end mt-10 lg:justify-start lg:gap-3">
              <a
                href="https://www.linkedin.com/in/agnes-lee-041971189/"
                rel="noreferrer"
                target="_blank"
                className={LINK_STYLE}
              >
                LinkedIn
              </a>
              <a
                href="mailto:lsj5677@gmail.com"
                rel="noreferrer"
                target="_blank"
                className={LINK_STYLE}
              >
                Email
              </a>
              <Link to="/contact" className={LINK_STYLE}>
                Contact
              </Link>
            </div>
          </div>
          <Box className="shrink-0 flex-auto" />
        </div>
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: "10vh", x: "-20px", rotate: "-90deg" }}
        animate={{ opacity: 0.3, y: 0, x: "-20px", rotate: "-90deg" }}
        transition={{ delay: 0.3, duration: 1 }}
        className="hidden md:block absolute text-lg uppercase bottom-20 -left-10 z-0 bottom -rotate-90 opacity-30"
      >
        Front end developer
      </motion.span>
    </main>
  );
}
