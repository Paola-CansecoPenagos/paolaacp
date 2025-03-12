import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaWhatsapp, FaTelegramPlane, FaEnvelope } from "react-icons/fa"; 
import { HiDownload } from "react-icons/hi"; 

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/paola-acp/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile of Paola ACP" // Agregar texto alternativo
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Paola-CansecoPenagos" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile of Paola ACP" // Agregar texto alternativo
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="mailto:paolaacp.dev@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send Email to Paola ACP" // Agregar texto alternativo
        >
          <FaEnvelope />
        </a>
      </div>
      <div>
        <a
          href="https://wa.me/+529651033354" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Contact Paola ACP" // Agregar texto alternativo
        >
          <FaWhatsapp />
        </a>
      </div>
      <div>
        <a
          href="https://t.me/PaolaACP" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram Contact Paola ACP" // Agregar texto alternativo
        >
          <FaTelegramPlane />
        </a>
      </div>
      <div>
        <a
          href="/cv" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV of Paola ACP" // Agregar texto alternativo
        >
          <HiDownload />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
