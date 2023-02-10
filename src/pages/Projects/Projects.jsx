import React, { useEffect, useState } from "react";
import BgText from "../../components/BgText";
import Card from "../../components/Card/Card";
import styles from "./Projects.module.css";

export default function Projects() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);
  const [resize, setResize] = useState(window.innerWidth);

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.debug("Error", error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <BgText text={"It's my projects"} />
      <div
        className={`${resize < 865 ? styles.smProjects : styles.lgProjects} ${
          styles.projects
        }`}
      >
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {resize < 865 ? (
          <>
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                thumbSrc={project.thumbnail}
                desc={project.description}
                gitSrc={project.gitAddr}
                siteSrc={project.siteAddr}
                period={project.period}
                tags={project.tags}
              />
            ))}
          </>
        ) : (
          <>
            <ul className={styles.tabTitle}>
              {projects.map((project) => (
                <li
                  key={project.id}
                  className={index === project.id ? styles.active : ""}
                  onClick={() => setIndex(project.id)}
                >
                  {project.title}
                </li>
              ))}
            </ul>

            {projects
              .filter((project) => index === project.id)
              .map((project) => (
                <Card
                  key={project.id}
                  title={project.title}
                  thumbSrc={project.thumbnail}
                  desc={project.description}
                  gitSrc={project.gitAddr}
                  siteSrc={project.siteAddr}
                  period={project.period}
                  tags={project.tags}
                />
              ))}
          </>
        )}
      </div>
    </>
  );
}
