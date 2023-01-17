import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useDarkMode } from "../../context/DarkModeContext";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.logo}>Agnes</h1>
      </Link>
      <nav className={styles.nav}>
        {/* <Link to="/about">About</Link> */}
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <a
          className={styles.icon}
          href="https://www.linkedin.com/in/agnes-lee-041971189/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <AiFillLinkedin />
        </a>
        <a
          className={styles.icon}
          href="https://github.com/lsj5677"
          target="_blank"
          rel="noreferrer"
          title="github"
        >
          <AiFillGithub />
        </a>
        <button onClick={toggleDarkMode}>
          {darkMode ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </nav>
    </header>
  );
}
