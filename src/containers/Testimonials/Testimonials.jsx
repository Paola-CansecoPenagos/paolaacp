import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonials.scss";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const { mode } = useTheme();

  const testimonials = [
    {
      imageurl: "https://via.placeholder.com/150",
      feedback: "Paola hizo un trabajo increíble, su código es limpio y eficiente.Paola hizo un trabajo increíble, su código es limpio y eficiente.Paola hizo un trabajo increíble, su código es limpio y eficiente.",
      name: "Juan Pérez",
      company: "Tech Solutions",
    },
    {
      imageurl: "https://via.placeholder.com/150",
      feedback: "Una desarrolladora muy profesional, entregó antes del plazo.",
      name: "María López",
      company: "Creative Agency",
    },
    {
      imageurl: "https://via.placeholder.com/150",
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
            <img src={test.imageurl} alt="testimonial" />
            <div className={`app__testimonial-content ${mode}`}>
              <p className={`p-text ${mode}`}>{test.feedback}</p>
              <div>
                <h4 className={`bold-text ${mode}`}>{test.name}</h4>
                <h5 className={`bold-text ${mode}`}>{test.company}</h5>
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
