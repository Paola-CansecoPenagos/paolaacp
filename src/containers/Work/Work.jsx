import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { useTheme } from "../../hooks/useTheme";
import { images } from "../../constants";
import { useTranslation } from "react-i18next";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { t } = useTranslation();
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([
    {
      title: "BNI Chiapas",
      description: 'workDescriptions.bni',
      imgUrl: images.bni,
      projectLink: "https://bnimexico.com/es-MX/index",
      codeLink: "",
      tags: ["Front-end"]
    },
    {
      title: "Reina Pepiada",
      description: 'workDescriptions.reinapepiada',
      imgUrl: images.reinapepiada,
      projectLink: "https://reinapepiada.com.mx",
      codeLink: "",
      tags: ["Back-end"]
    },
    {
      title: "D'BEEF",
      description: 'workDescriptions.dbeef',
      imgUrl: images.dbeef,
      projectLink: "https://dbeefmaxboutique.com",
      codeLink: "",
      tags: ["Full Stack"]
    },
    {
      title: "REICHSTAG",
      description: 'workDescriptions.reichstag',
      imgUrl: images.reichstag,
      projectLink: "https://reichstag.com.mx",
      codeLink: "",
      tags: ["Quality Assurance"]
    },
    {
      title: "FLDCH",
      description: 'workDescriptions.fldch',
      imgUrl: images.fldch,
      projectLink: "https://www.fldch.edu.mx",
      codeLink: "",
      tags: ["Full Stack"]
    },
    {
      title: "FVNDY",
      description: 'workDescriptions.fvndy',
      imgUrl: images.fvndy,
      projectLink: "https://fvndy.io",
      codeLink: "",
      tags: ["Full Stack"]
    },
  ]);
  const [filterWork, setFilterWork] = useState(works);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const { mode } = useTheme();

  return (
    <>
      <h2 className={`head-text ${mode}`}>
        {t("workS.title1")}<span>{t("workS.title2")}</span> <br />{t("workS.title3")}<span>{t("workS.title4")}</span>
      </h2>
      <div className="app__work-filter">
        {[
          "Full Stack",
          "Front-end",
          "Back-end",
          "Quality Assurance",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
          >
            {item === "All" ? t("workS.filters.all") : item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className={`app__work-item ${mode} app_flex`} key={index}>
            <div className="app__work-img app__flex">
              <picture>
                <source srcSet={work.imgUrl.webp} type="image/webp" />
                <img src={work.imgUrl.original} alt={work.title} />
              </picture>
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer" aria-label={`View project ${work.title}`}>
                  <motion.div
                    whileInView={{ scale: [1, 0.9] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className=" app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer" aria-label={`View code for ${work.title}`}>
                    <motion.div
                      whileInView={{ scale: [1, 0.9] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className=" app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h1 className={`bold-text ${mode}`}>{work.title}</h1>
              <p className={`p-text ${mode}`} style={{ marginTop: 10 }}>
                {t(work.description)}
              </p>
              <div className="mobile-links">
                <div>
                  {work.projectLink && (
                    <a href={work.projectLink} target="_blank" rel="noreferrer" aria-label={`View project ${work.title}`}>
                      <motion.div
                        whileInView={{ scale: [1, 0.9] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </motion.div>
                    </a>
                  )}
                </div>
                <div>
                  {work.codeLink && (
                    <a href={work.codeLink} target="_blank" rel="noreferrer" aria-label={`View code for ${work.title}`}>
                      <motion.div
                        whileInView={{ scale: [1, 0.9] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  )}
                </div>
              </div>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
