import { SiteContent } from "./content.model";

/** English texts. */
export const CONTENT_EN: SiteContent = {
  site: {
    name: "Phuc Hien Bui",
    logoStart: "Hie",
    logoAccent: "n",
    email: "phuchienbui2@gmail.com",
    githubUrl: "https://github.com/Phuchienbui",
    linkedinUrl: "",
    aboutPhotoSrc: "",
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
    socialLabel: "Profiles and contact",
    githubLabel: "GitHub profile",
    emailLabel: "Send an email",
    linkedinLabel: "LinkedIn profile",
    scrollLabel: "Scroll down",
  },
  about: {
    title: "About me",
    intro: ["[TODO_CONTENT: Intro text About me EN]"],
    points: [
      {
        icon: "about-location-desktop",
        text: "I live in Dortmund. [TODO_CONTENT: remote availability EN]",
      },
      {
        icon: "about-bulb-desktop",
        text: "[TODO_CONTENT: openness and willingness to learn EN]",
      },
      { icon: "about-puzzle-desktop", text: "[TODO_CONTENT: problem solving EN]" },
    ],
    photoAlt: "Portrait of Phuc Hien Bui",
    photoPlaceholder: "[TODO_CONTENT: photo About me]",
  },
  skills: {
    title: "Skills",
    intro: "[TODO_CONTENT: Text neben dem Skill-Raster EN]",
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
    ctaText: "[TODO_CONTENT: Text unter der Frage EN]",
    ctaLabel: "Get in touch",
  },
};
