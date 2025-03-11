import React, { useState } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import ReactTooltip from "react-tooltip";
import "./Skills.scss";
import { useTheme } from "../../hooks/useTheme";
import { images } from "../../constants";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const [skills, setSkills] = useState([
    {
      name: "PHP",
      icon: images.php,
    },
    {
      name: "Python",
      icon: images.python,
    },
    {
      name: "Docker",
      icon: images.docker,
    },
    {
      name: "TypeScript",
      icon: images.typescript,
    },
    {
      name: "SQL",
      icon: images.sql,
    },
    {
      name: "React",
      icon: images.react,
    },
    {
      name: "Git",
      icon: images.git,
    },
    {
      name: "Flutter",
      icon: images.flutter,
    },
    {
      name: "Node.js",
      icon: images.node,
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      year: 2023,
      works: [
        {
          name: "Back-end Developer",
          company: "INAOE",
          desc: "experiences.inaoe",
        },
        {
          name: "Back-end Developer",
          company: "CYBAC TI",
          desc: "experiences.cybacti1",
        },
      ],
    },
    {
      year: 2024,
      works: [
        {
          name: "Full Stack Developer",
          company: "FVNDY",
          desc: "experiences.fvndy",
        },
        {
          name: "Full Stack Developer",
          company: "CYBAC TI",
          desc: "experiences.cybacti2",
        },
      ],
    },
    {
      year: 2025,
      works: [
        {
          name: "Full Stack Developer",
          company: "FVNDY",
          desc: "experiences.fvndy",
        },
      ],
    },
  ]);

  const { mode } = useTheme();

  return (
    <>
      <h2 className={`head-text ${mode}`}>{t("experiences.title1")} <span>{t("experiences.title2")}</span> <br />{t("experiences.title3")}<span>{t("experiences.title4")}</span></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={`app__skills-item ${mode} app__flex`}
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: "#EDF2F8" }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className={`p-text ${mode}`}>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experiences
            ?.sort((a, b) => b.year - a.year)
            .map((experience) => (
              <motion.div className="app__skills-exp-item" key={experience.year}>
                <div className="app__skills-exp-year">
                  <p className={`bold-text ${mode}`}>{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience?.works?.map((work, index) => {
                    const uniqueKey = `${work.name}-${experience.year}-${index}`;
                    return (
                      <React.Fragment key={uniqueKey}>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tip
                          data-for={uniqueKey}
                        >
                          <h4 className={`bold-text ${mode}`}>{work.name}</h4>
                          <p className={`p-text ${mode}`}>{work.company}</p>
                        </motion.div>
                        <ReactTooltip
                          id={uniqueKey}
                          effect="solid"
                          arrowColor="#fff"
                          className="skills-tooltip"
                        >
                          {t(work.desc)}
                        </ReactTooltip>
                      </React.Fragment>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
