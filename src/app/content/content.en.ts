import { SiteContent } from "./content.model";
import { LEGAL_NOTICE_EN, PRIVACY_POLICY_EN } from "./legal.en";

export const CONTENT_EN: SiteContent = {
  meta: {
    title: "Phuc Hien Bui – Portfolio",
    description:
      "Portfolio of Phuc Hien Bui: IT specialist for application development in retraining. Web projects built with Angular, TypeScript and SCSS.",
    locale: "en_US",
  },
  site: {
    name: "Phuc Hien Bui",
    logoStart: "Hie",
    logoAccent: "n",
    email: "phuchienbui2@gmail.com",
    githubUrl: "https://github.com/Phuchienbui",
    linkedinUrl: "",
    aboutPhotoSrc: "images/about-portrait.webp",
  },
  header: {
    homeLinkLabel: "Phuc Hien Bui – go to home page",
    navLabel: "Main navigation",
    navItems: [
      { label: "About me", fragment: "about", mobileOnly: false },
      { label: "Skills", fragment: "skills", mobileOnly: false },
      { label: "Portfolio", fragment: "portfolio", mobileOnly: false },
      { label: "Contact", fragment: "contact", mobileOnly: true },
    ],
    languageLabel: "Choose language",
    languageNames: { de: "Deutsch", en: "English" },
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    greeting: "I am",
    role: "IT Specialist for Application Development",
    ctaLabel: "Let's talk!",
    scrollLabel: "Scroll down",
  },
  about: {
    title: "About me",
    intro: [
      "I am Phuc Hien Bui and I am retraining as an IT specialist for application development. I build web applications with Angular, TypeScript and SCSS. For me it is not about just typing syntax but about understanding why code is structured the way it is. [TODO_CONTENT: Übersetzung prüfen]",
    ],
    points: [
      {
        icon: "about-location-desktop",
        text: "I live in Dortmund. I enjoy working on site in a team and am also open to hybrid models. [TODO_CONTENT: Übersetzung prüfen]",
      },
      {
        icon: "about-bulb-desktop",
        text: "I only recently started in software development and learn something new every day. I welcome feedback, put what I learn to the test in my own projects such as the Pokédex and El Pollo Loco, and keep it in my head long-term with Anki. [TODO_CONTENT: Übersetzung prüfen]",
      },
      {
        icon: "about-puzzle-desktop",
        text: "I approach problems systematically: I break them into small parts, look for the cause instead of patching the symptom, and check whether my solution really holds. Strategy games such as chess train my ability to think ahead. [TODO_CONTENT: Übersetzung prüfen]",
      },
    ],
    photoAlt: "Portrait of Phuc Hien Bui",
    photoPlaceholder: "[TODO_CONTENT: photo About me]",
  },
  skills: {
    title: "Skills",
    intro:
      "I am retraining as a software developer with a focus on web development. In my projects, from a browser game in JavaScript to a Pokédex with a REST API to this portfolio in Angular, I work with HTML, CSS/SCSS, JavaScript and TypeScript and manage my code with Git and GitHub. It matters to me to understand why something works, not just how to type it. The web changes quickly, so I keep learning every day. [TODO_CONTENT: Übersetzung prüfen]",
    skillNames: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      typescript: "TypeScript",
      angular: "Angular",
      git: "Git",
      "rest-api": "REST-API",
      scrum: "Scrum",
      "continually-learning": "Continually learning",
    },
    ctaHeading: "Looking for ",
    ctaHighlight: "another skill?",
    ctaText:
      "A new framework, a language like Python or a tool I do not know yet: I enjoy getting into new technologies and learn systematically with hands-on projects and spaced repetition. Tell me what your team works with, and I will get up to speed. [TODO_CONTENT: Übersetzung prüfen]",
    ctaLabel: "Get in touch",
  },
  portfolio: {
    title: "Portfolio",
    intro: "[TODO_CONTENT: text below the Portfolio title EN]",
    descriptions: {
      "el-pollo-loco": "Browser game built with JavaScript, HTML and CSS.",
      join: "Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.",
      dabubble:
        "Slack clone app for team communication and collaboration, with an intuitive interface, real-time messaging and a robust channel organization.",
      pokedex: "Pokédex web application using a REST API to explore Pokémon data.",
    },
    card: {
      liveLabel: "Live test",
      githubLabel: "GitHub",
      liveAria: "View {name} live",
      githubAria: "View {name} on GitHub",
      toggleLabel: "Show details of {name}",
      imageAlt: "Preview of {name}",
      imagePlaceholder: "[TODO_CONTENT: preview image]",
    },
  },
  testimonial: {
    title: "References",
    previousLabel: "Previous quote",
    nextLabel: "Next quote",
    goToLabel: "Show quote {n}",
    avatarAlt: "Portrait of {name}",
  },
  contact: {
    title: "Contact",
    heading: "Got a problem to solve?",
    intro:
      "Do you have an idea, a project or an open position? Briefly tell me what it is about. I will get back to you as soon as possible. [TODO_CONTENT: Übersetzung prüfen]",
    name: { label: "Name", placeholder: "Your name", error: "Please enter at least 2 characters." },
    email: {
      label: "Email",
      placeholder: "Your email",
      error: "Please enter a valid email address.",
    },
    message: {
      label: "Message",
      placeholder: "Your message",
      error: "Please enter at least 10 characters.",
    },
    honeypotLabel: "Website (please leave empty)",
    privacy: {
      before: "I have read the ",
      link: "privacy policy",
      after: " and agree to the processing of my data.",
      error: "Please agree to the privacy policy.",
    },
    submitLabel: "Send message :)",
    sendingLabel: "Sending …",
    success: "Thank you! Your message has been sent.",
    failure: "Sending failed, sorry. Please try again later or send me an email.",
    backToTop: "Back to top",
  },
  social: {
    label: "Profiles and contact",
    githubLabel: "GitHub profile",
    emailLabel: "Send an email",
    linkedinLabel: "LinkedIn profile",
  },
  footer: {
    homeLinkLabel: "Phuc Hien Bui – go to home page",
    legalLabel: "Legal",
    legalNotice: "Legal notice",
    privacyPolicy: "Privacy policy",
  },
  legalNotice: LEGAL_NOTICE_EN,
  privacyPolicy: PRIVACY_POLICY_EN,
};
