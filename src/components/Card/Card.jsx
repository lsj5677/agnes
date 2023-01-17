import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import styles from "./Card.module.css";

export default function Card({
  title,
  thumbSrc,
  desc,
  gitSrc,
  siteSrc,
  period,
  tags,
}) {
  return (
    <article className={styles.article}>
      <div className={styles.image}>
        <img src={thumbSrc} alt={title} />
      </div>
      <div className={styles.text}>
        <h4>{title}</h4>
        <span>{period}</span>
        <p>{desc}</p>
        <ul className={styles.tags}>
          {tags && tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
      <div className={styles.linkGroup}>
        <a href={gitSrc} target="_blank" rel="noreferrer" title="view code">
          <AiFillGithub /> view code
        </a>
        <a href={siteSrc} target="_blank" rel="noreferrer" title="view site">
          <FiMonitor /> view site
        </a>
      </div>
    </article>
  );
}
