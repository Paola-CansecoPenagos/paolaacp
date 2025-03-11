import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "Education",
      work: "Work",
      skills: "Skills",
      contact: "Contact",
      testimonials: "Testimonials",

      header: {
        greeting: "Hello, I am",
        roles: ["Software Developer"],
      },

      aboutS: {
        title: "I Know That",
        development: "Good Development",
        means: "Means",
        business: "Better Opportunities",
      },

      certificates: {
        upchiapas: "Software Engineering",
        courseraCybersecurity: "Google Cybersecurity Certificate",
        courseraOWASP: "Web Application Security Testing with OWASP ZAP",
        udemyWebScraping: "Web Scraping: Data Extraction from Web",
      },
      workDescriptions: {
        bni: "In this project, I was responsible for designing and developing highly responsive views, ensuring an optimal user experience on mobile and desktop devices. Additionally, I worked on performance optimization to guarantee fast and efficient load times.",
        reinapepiada: "My role in this project was to improve the responsiveness of the views, implement a complete translation system for dishes, allowing site internationalization, and create various reusable and structural components to optimize page management.",
        dbeef: "In this project, I was responsible for developing multiple client-side pages, but I also collaborated in implementing functionalities that allowed employees to manage, edit, and create the information displayed on the site, improving the system's operational efficiency.",
        reichstag: "My role in Reichstag was mainly in the quality assurance area. I conducted thorough testing on the final project, detecting and fixing errors, and ensuring the application's stability before its release. Additionally, I handled the final build execution, efficiently managing the production version deployment.",
        fldch: "At FLDCH, I was responsible for creating views, working alongside my teammates to define routes and create reusable components. I also took charge of consuming API endpoints to ensure that all views were properly fed with data and updated with the latest information.",
        fvndy: "At FVNDY, I implemented new designs and visual improvements, but I also made functional updates to optimize the user experience and add more features to the application. Additionally, I documented several parts of the process, contributing to project clarity and consistency throughout its development.",
      },
      experiences:{
        inaoe: "I reviewed and optimized messaging APIs and implemented a notification module integrated with Firebase to improve communication on the platform.",
        cybacti1: "I developed a management system for employee and project registration, improving internal administrative efficiency.",
        fvndy: "I developed new features, managed repository updates, and performed optimizations to improve the project's scalability and performance.",
        cybacti2: "I developed and optimized websites, improving responsive design and functionality to manage company information.",
        title1: "Skills in ",
        title2: "Action,",
        title3: "Results in ",
        title4: "Code",
      },
      workS: {
        title1: "Every Line of ",
        title2: "Code ",
        title3: "Tells a ",
        title4: "Story",
        filters: {
          fullstack: "Full Stack",
          frontend: "Front-end",
          backend: "Back-end",
          qa: "Quality Assurance",
          all: "All",
        },
        visit: "Visit App",
        sourceCode: "Source Code",
      },
      contactS: {
        title1: "",
        title2: "Success, ",
        title3: "My ",
        title4: "Commitment",
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        buttonsend: "Send Message",
        sending: "Sending...",
        thanks1: "Thank You for Getting in Touch",
        thanks2: "I’ll Be in Touch Soon!"
      },
      testimonialsS: {
        title1: "Words of ",
        title2: "Trust",
      }
    },
  },
  es: {
    translation: {
      home: "Inicio",
      about: "Educación",
      work: "Trabajo",
      skills: "Habilidades",
      contact: "Contacto",
      testimonials: "Testimonios",

      header: {
        greeting: "Hola, soy",
        roles: ["Desarrolladora de Software"],
      },

      aboutS: {
        title: "Sé Que Un",
        development: "Buen Desarrollo",
        means: "Crea",
        business: "Mejores Oportunidades",
      },

      certificates: {
        upchiapas: "Ingeniería en Software",
        courseraCybersecurity: "Certificado de Ciberseguridad de Google",
        courseraOWASP: "Pruebas de Seguridad de Aplicaciones Web con OWASP ZAP",
        udemyWebScraping: "Web Scraping: Extracción de Datos de la Web",
      },
      workDescriptions: {
        bni: "En este proyecto, me encargué de diseñar y desarrollar vistas altamente responsivas, asegurando una experiencia de usuario óptima en dispositivos móviles y de escritorio. Además, trabajé en la optimización del rendimiento para garantizar tiempos de carga rápidos y eficientes.",
        reinapepiada: "Mi rol en este proyecto consistió en mejorar la responsividad de las vistas, implementar un sistema completo de traducciones para los platillos, permitiendo la internacionalización del sitio, y la creación de varios componentes reutilizables y estructurales para optimizar la gestión de las páginas.",
        dbeef: "En este proyecto, fui responsable de desarrollar varias páginas en el lado del cliente, pero también colaboré en la implementación de funcionalidades que permitieran a los empleados gestionar, editar y crear la información mostrada en el sitio, mejorando la eficiencia operativa del sistema.",
        reichstag: "Mi rol en Reichstag fue principalmente en el área de pruebas de calidad. Realicé pruebas exhaustivas al proyecto final, detectando y corrigiendo errores, y asegurando la estabilidad de la aplicación antes de su lanzamiento. Además, me encargué de la ejecución del build final, gestionando la implementación de la versión de producción de manera eficiente.",
        fldch: "En FLDCH, me encargué de la creación de vistas, trabajando en colaboración con mis compañeros para definir rutas y crear componentes reutilizables. También tuve a mi cargo el consumo de los endpoints de la API para asegurar que todas las vistas se alimentaran correctamente de los datos y estuvieran actualizadas con la información más reciente.",
        fvndy: "En FVNDY, me encargué de implementar nuevos diseños y mejoras visuales, pero también realicé actualizaciones funcionales para optimizar la experiencia de usuario y agregar más funcionalidades a la aplicación. Además, documenté varias partes del proceso, contribuyendo a la claridad y la consistencia del proyecto a lo largo de su desarrollo.",
      },
      experiences:{
        inaoe: "Revisé y optimicé APIs de mensajería e implementé un módulo de notificaciones integrado con Firebase para mejorar la comunicación en la plataforma.",
        cybacti1: "Desarrollé un sistema de gestión para el registro de empleados y proyectos, mejorando la eficiencia administrativa interna.",
        fvndy: "Desarrollé nuevas funcionalidades, gestioné actualizaciones del repositorio y optimizaciones para mejorar la escalabilidad y el rendimiento del proyecto.",
        cybacti2: "Desarrollé y optimicé páginas web, mejorando el diseño responsivo y las funcionalidades para gestionar la información de las empresas.",
        title1: "Habilidades en ",
        title2: "Acción,",
        title3: "Resultados en ",
        title4: "Código",
      },
      workS: {
        title1: "Cada Línea de ",
        title2: "Código,",
        title3: "Cuenta Una ",
        title4: "Historia",
        filters: {
          fullstack: "Full Stack",
          frontend: "Front-end",
          backend: "Back-end",
          qa: "QA",
          all: "Todos",
        },
        visit: "Visitar App",
        sourceCode: "Código Fuente",
      },
      contactS: {
        title1: "El ",
        title2: "Éxito, ",
        title3: "Mi ",
        title4: "Compromiso",
        name: "Tu Nombre",
        email: "Tu Correo",
        message: "Tu Mensaje",
        buttonsend: "Enviar Mensaje",
        sending: "Enviando...",
        thanks1: "Te Agradezco Por Ponerte en Contacto",
        thanks2: "¡Nos Hablamos Pronto!"
      },
      testimonialsS: {
        title1: "Palabras de",
        title2: " Confianza",
      }
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
