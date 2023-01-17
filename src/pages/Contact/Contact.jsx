import React from "react";
import BgText from "../../components/BgText";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <BgText text={"Get in touch"} />
      <div className={styles.contact}>
        <div className={styles.title}>
          {/* <img src="./image/profile.png" alt="profile" /> */}
          <h3>Hello,</h3>
        </div>
        <ul>
          <li>
            If you have any questions, please do not hesitate to contact me
            anytime :)
          </li>
          <li>
            <a href="mailto:lsj5677@gmail.com">
              <AiOutlineMail /> : <span>lsj5677@gmail.com</span>
            </a>
          </li>
        </ul>
        <span>or</span>
        <ul>
          <li>If you want to see my resume, click the link or icon below :)</li>
          <li>
            <a
              href="https://www.linkedin.com/in/agnes-lee-041971189/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <AiFillLinkedin /> : <span>LinkedIn Profile</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
