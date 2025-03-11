import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const honeypot = formData.get("honeypot");

    if (honeypot) {
      setLoading(false);
      console.log("Bot detected! Form not submitted.");
      return;
    }

    emailjs
      .sendForm(
        "service_paolaacp",
        "template_zczmsdx",
        form.current,
        "TGMSBYI1j2490q4fH"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsFormSubmited(true);
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const { mode } = useTheme();

  return (
    <>
      <h2 className={`head-text ${mode}`}>
        {t("contactS.title1")} <span>{t("contactS.title2")}</span> <br /> {t("contactS.title3")} <span>{t("contactS.title4")}</span>
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:paolaacp.dev@gmail.com" className="p-text">
            paolaacp.dev@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +52 9651033352" className="p-text">
            +52 965 103 33 54
          </a>
        </div>
      </div>

      {!isFormSubmited ? (
        <form
          className={`app__footer-form ${mode} app__flex`}
          ref={form}
          onSubmit={sendEmail}
        >
          <div style={{ display: "none" }}>
            <input
              type="text"
              name="honeypot"
              value=""
              onChange={() => {}}
              aria-hidden="true"
            />
          </div>

          <div className="app__flex">
            <input
              type="text"
              className={`p-text ${mode}`}
              placeholder={t("contactS.name")}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className={`p-text ${mode}`}
              placeholder={t("contactS.email")}
              name="email"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder={t("contactS.message")}
              className={`p-text ${mode}`}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`p-text ${mode}`}
          >
            {loading ? t("contactS.sending") : t("contactS.buttonsend")}
          </button>
        </form>
      ) : (
        <div>
          <h3 className={`head-text ${mode}`}>
          {t("contactS.title1")}<br /> <span>{t("contactS.title4")}</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
