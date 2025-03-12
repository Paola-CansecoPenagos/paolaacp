import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX, HiSun, HiMoon } from "react-icons/hi";
import { MdGTranslate } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";
import "../../i18n";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { changeMode, mode } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  const iconColor = mode === "dark" ? "#f0f0f0" : "#6b7688";

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <picture>
          <source srcSet={require("../../assets/logonavdar.webp")} type="image/webp" />
          <img
            src={require("../../assets/logonavdar.png")}
            alt="Logo"
            className="app__logo"
            style={{ width: "150px", height: "auto", cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </picture>

      </div>
      <ul className={`app__navbar-links ${mode}`}>
        {["home", "about", "work", "skills", "testimonials", "contact"].map((item) => (
          <li className={`app__flex p-text ${mode}`} key={`link-${item}`} style={{ display: "flex", alignItems: "center" }}>
            <a href={`#${item}`}>{t(item)}</a>
          </li>
        ))}
        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={toggleMode}
            className="mode-toggle"
            style={{ display: "flex", alignItems: "center", border: "none", background: "none", cursor: "pointer" }}
          >
            {mode === "dark" ? <HiSun size={20} color={iconColor} /> : <HiMoon size={20} color={iconColor} />}
          </button>
        </li>
        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={changeLanguage}
            className="lang-toggle"
            style={{ display: "flex", alignItems: "center", border: "none", background: "none", cursor: "pointer" }}
          >
            <MdGTranslate size={20} color={iconColor} />
          </button>
        </li>
      </ul>
      <div className={`app__navbar-menu ${mode}`}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: "easeOut" }}>
            <HiX onClick={() => setToggle(false)} />
            <ul className={`app__navbar-links ${mode}`}>
              {["home", "about", "work", "skills", "testimonials", "contact"].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center" }}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {t(item)}
                  </a>
                </li>

              ))}
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={toggleMode}
                  className="mode-toggle"
                  style={{ display: "flex", alignItems: "center", border: "none", background: "none", cursor: "pointer" }}
                >
                  {mode === "dark" ? <HiSun size={20} color={iconColor} /> : <HiMoon size={20} color={iconColor} />}
                </button>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={changeLanguage}
                  className="lang-toggle"
                  style={{ display: "flex", alignItems: "center", border: "none", background: "none", cursor: "pointer" }}
                >
                  <MdGTranslate size={20} color={iconColor} />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
