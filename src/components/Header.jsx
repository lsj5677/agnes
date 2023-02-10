import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useDarkMode } from "../context/DarkModeContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const TRANSITION = "transition-all ease-in-out duration-100";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mobileMenu, setMobileMenu] = useState(false);
  const html = document.getElementsByTagName("html")[0];

  const handleMobileMenu = (e) => {
    setMobileMenu(!mobileMenu);
    if (!mobileMenu) {
      html.classList.add("mobile-on");
    } else {
      html.classList.remove("mobile-on");
    }
  };

  const handleChangeFalse = () => {
    setMobileMenu(false);
    html.classList.remove("mobile-on");
  };

  return (
    <header className="sub-layout flex justify-between fixed z-50 bg-beige dark:bg-black sm:static sm:bg-transparent dark:sm:bg-transparent">
      <Link to="/">
        <img
          src="./profile/profile-img-2.png"
          alt="profile avatar"
          className="w-16 sm:w-20"
        />
        {/* <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue to-degitalLavender font-bold text-4xl"></h1> */}
      </Link>
      <nav
        className={`${
          mobileMenu ? `right-0 ${TRANSITION}` : `-right-full ${TRANSITION}`
        } w-screen h-screen flex flex-col justify-center fixed top-0 gap-10 text-center bg-beige dark:bg-mediumGray sm:static sm:h-auto sm:w-auto sm:flex-row sm:items-center sm:flex-auto sm:justify-end sm:text-justify sm:bg-transparent sm:dark:bg-transparent`}
      >
        <Link to="/about" onClick={handleChangeFalse}>
          About
        </Link>
        <Link to="/projects" onClick={handleChangeFalse}>
          Projects
        </Link>
        <Link to="/contact" onClick={handleChangeFalse}>
          Contact
        </Link>
        <a
          href="https://www.linkedin.com/in/agnes-lee-041971189/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/lsj5677"
          target="_blank"
          rel="noreferrer"
          title="github"
        >
          <AiFillGithub />
        </a>
        <button
          onClick={toggleDarkMode}
          className="absolute bottom-10 right-10 sm:static sm:ml-8"
        >
          {darkMode ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </nav>
      <button className={` z-10 sm:hidden`} onClick={handleMobileMenu}>
        {mobileMenu ? (
          <IoCloseOutline className="text-4xl" />
        ) : (
          <RxHamburgerMenu />
        )}
      </button>
    </header>
  );
}
