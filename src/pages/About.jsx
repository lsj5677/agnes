import React, { useEffect, useState } from "react";
import Experience from "../components/Experience";
import { motion } from "framer-motion";

export default function About() {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    fetch("/data/experience.json")
      .then((res) => res.json())
      .then((data) => setExp(data))
      .catch((error) => console.debug("Error"));
  }, []);

  return (
    <section className="sub-wrap sub-layout">
      <article className="md:flex items-center">
        <motion.div
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, type: "spring", bounce: 0.6 }}
          className="max-w-sm mx-auto md:shrink-0"
        >
          <img
            src="./profile/profile-img-smile.png"
            alt="profile"
            className="w-full"
          />
        </motion.div>
        <div className="text-lg">
          <motion.p
            className="my-10"
            initial={{ opacity: 0, y: "20px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            I have worked in the industries such as <strong>E-Commerce</strong>{" "}
            and <strong>marketing agency</strong>. I experienced in a range from
            designing to developing and building websites, releasing them to
            customers, also maintaining as well.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: "20px" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            I have worked on <strong>E-commerce</strong>, ranging from design to
            building front-end user interfaces and websites, data fetching as
            well. With my persistent efforts to take ownership of my work, show
            initative, and be a strong team player, I have always been rated as
            a high performer in my performance reviews.
          </motion.p>
        </div>
      </article>
      <article className="mt-20">
        <motion.h2
          initial={{ opacity: 0, y: "20px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          Experience
        </motion.h2>
        {exp.map((item) => (
          <Experience
            key={item.id}
            role={item.role}
            company={item.company}
            location={item.location}
            desc={item.desc}
            period={item.period}
            techUsed={item.techUsed}
          />
        ))}
      </article>
    </section>
  );
}
