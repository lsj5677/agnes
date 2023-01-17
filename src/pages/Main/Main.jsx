import React from "react";
import BgText from "../../components/BgText";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <>
      <BgText text={"Hello, I am Agnes"} />
      <main className={styles.main}>
        <article className={styles.article}>
          <span>Hello, I am</span>
          <h2 className={styles.name}>AGNES</h2>
          <p>
            I started my career from web design and now I am a front-end
            developer. <br />
            Furthermore, I am on the road to become a full stack developer.
          </p>
        </article>
      </main>
    </>
  );
}
