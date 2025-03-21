import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonials.scss";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";
import { images } from "../../constants";

const Testimonials = () => {
  const { t } = useTranslation();
  const { mode } = useTheme();

  const testimonials = [
    {
      imageurl: "",
      feedback: "Desde su primer día, Paola demostró gran compromiso, dedicación y capacidad para perfeccionar sus conocimientos en las herramientas que ya dominaba, así como para aprender nuevas tecnologías. Ello la llevó a posicionarse como encargada del área de tecnología en la empresa, liderando con éxito diversos proyectos. Su habilidad para iterar rápidamente, proponer mejoras y comunicarse de manera efectiva con los stakeholders la convierte en una profesional altamente recomendable y valiosa para cualquier organización",
      name: "FVNDY",
      company: "Plataforma de relación con inversionistas",
    },
    {
      imageurl: images.alejandro,
      feedback: "Durante su estancia en Grupo CYBAC, desempeñó un papel fundamental en el desarrollo de proyectos utilizando Laravel, demostrando un gran compromiso y habilidades en la implementación de soluciones backend. Además, colaboró en la maquetación del frontend, aplicando buenas prácticas de desarrollo y asegurando interfaces funcionales y atractivas. Su capacidad de aprendizaje y disposición para aplicar las enseñanzas recibidas fueron notables, aportando de manera positiva al equipo de trabajo. Gracias a su actitud proactiva y su interés en mejorar continuamente, contribuyó de manera significativa al éxito de los proyectos en los que participó.",
      name: "Ing. Francisco Javier Reyes Hernández",
      company: "Líder de Equipo de Programación de Grupo CYBAC",
    },
    {
      imageurl: images.alejandro,
      feedback: "Excelente comunicación y calidad en el desarrollo web.",
      name: "Carlos Gómez",
      company: "Startup X",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const test = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h2 className={`head-text ${mode}`}>{t("testimonialsS.title1")} <span>{t("testimonialsS.title2")}</span></h2>
      {testimonials.length > 0 && (
        <>
          <div className={`app__testimonial-item ${mode} app__flex`}>
            {/* <picture>
              <source srcSet={test.imageurl.webp} type="image/webp" />
            </picture> */}
            <div className={`app__testimonial-content ${mode}`}>
              <p className={`p-text ${mode}`}>{test.feedback}</p>
              <div>
                <h1 className={`bold-text ${mode}`}>{test.name}</h1>
                <h2 className={`bold-text ${mode}`}>{test.company}</h2>
              </div>
            </div>
          </div>

          <div className={`app__testimonial-btns ${mode} app__flex`}>
            <div
              className={`app__flex test-arrow ${mode}`}
              onClick={() =>
                handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className={`app__flex test-arrow ${mode}`}
              onClick={() =>
                handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
