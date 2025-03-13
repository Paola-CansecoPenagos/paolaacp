import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.scss";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { mode } = useTheme();
  const { t } = useTranslation();
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={`app__header app__flex`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className={`badge-cmp ${mode} app__flex`}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">{t("header.greeting")}</p>
              <h1 className="head-text">Paola <span>Canseco</span></h1>
            </div>
          </div>
          <div className={`tag-cmp ${mode} app__flex`}>
            {t("header.roles", { returnObjects: true }).map((role, index) => (
              <p key={index} className="p-text">{role}</p>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <div className="app__header-picture">
          {window.innerWidth > 768 && (
            <div className="app__header-picture">
              <picture>
                <source srcSet={images.bg.webp} type="image/webp" />
                <source srcSet={images.bg.original} type="image/png" />
                <img src={images.bg.webp} alt="profile_bg" />
              </picture>
            </div>
          )}

        </div>

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle.original}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>


      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.php.webp, images.sql.webp, images.python.webp].map((circle, index) => (
          <div
            className={`circle-cmp ${mode} app__flex`}
            key={`circle-${index}`}
          >
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
