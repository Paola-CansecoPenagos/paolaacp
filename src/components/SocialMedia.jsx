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
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Paola-CansecoPenagos" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="mailto:paolaacp.dev@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
      <div>
        <a
          href="https://wa.me/+529651033354" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div>
        <a
          href="https://t.me/PaolaACP" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane />
        </a>
      </div>
      <div>
        <a
          href="/cv" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiDownload />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
