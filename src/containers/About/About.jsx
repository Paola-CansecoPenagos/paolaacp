import React from "react";
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai"; // Ícono de ojo
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";
import { images } from "../../constants";

const About = () => {
  const { mode } = useTheme();
  const { t } = useTranslation();

  const abouts = [
    {
      title: "UP Chiapas",
      description: "certificates.upchiapas", // Cambia la descripción a la clave de traducción
      imgUrl: images.upchiapas,
      url: "https://www.upchiapas.edu.mx/", 
    },
    {
      title: "AWS Training and Certification",
      description: "AWS Academy Cloud Operations", // Cambia la descripción a la clave de traducción
      imgUrl: images.cercloudoperations,
      url: "https://www.credly.com/badges/52b71960-098f-4052-be21-9ceb3c516017/public_url",
    },
    {
      title: "AWS Training and Certification",
      description: "AWS Academy Cloud Foundations", // Cambia la descripción a la clave de traducción
      imgUrl: images.cercloudfoundations,
      url: "https://www.credly.com/badges/65cee2ee-1eef-44b3-b3ce-11671e6a322e/public_url", 
    },
    {
      title: "Coursera",
      description: "certificates.courseraCybersecurity", // Cambia la descripción a la clave de traducción
      imgUrl: images.cerciberseguridad,
      url: "https://www.credly.com/badges/0f3f881f-28f4-4005-8a53-42e6da7dadc4/public_url", 
    },
    {
      title: "Coursera",
      description: "certificates.courseraOWASP", // Cambia la descripción a la clave de traducción
      imgUrl: images.cerowasap,
      url: "https://coursera.org/verify/IJD0QYURLMXM", 
    },
    {
      title: "Udemy",
      description: "certificates.udemyWebScraping", // Cambia la descripción a la clave de traducción
      imgUrl: images.cerudemy,
      url: "https://www.udemy.com/certificate/UC-411aee69-8270-4b37-8956-6a8c0dee92bd/", 
    },
  ];  

  return (
    <>
      <h2 className={`head-text ${mode}`}>
        {t("aboutS.title")} <span>{t("aboutS.development")}</span> <br /> {t("aboutS.means")}{" "}
        <span>{t("aboutS.business")}</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <div className="app__profile-img-container">
              <img src={about.imgUrl} alt={about.title} />
              {about.url && (
                <a
                  href={about.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app__profile-link"
                >
                  <AiFillEye size={20} /> {/* Ícono de ojo */}
                </a>
              )}
            </div>
            <h2 className={`bold-text ${mode}`} style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className={`p-text ${mode}`} style={{ marginTop: "10px" }}>
              {t(about.description)} 
            </p>

          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
