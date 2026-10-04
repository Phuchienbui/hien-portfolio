import { SiteContent } from "./content.model";
import { LEGAL_NOTICE_EN, PRIVACY_POLICY_EN } from "./legal.en";

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
  portfolio: {
    title: "Portfolio",
    intro: "[TODO_CONTENT: text below the Portfolio title EN]",
    descriptions: {
      bestellapp:
        "[TODO_CONTENT: BestellApp description, the repository is private and not readable]",
      "memory-duel":
        "Two-player memory game in the browser with four themes and three board sizes. [TODO_CONTENT: confirm description]",
      "el-pollo-loco":
        "Browser project built with JavaScript, HTML and CSS. The repository has no README. [TODO_CONTENT: confirm description]",
      pokedex:
        "Web application for exploring Pokémon data, still a work in progress according to the repository. [TODO_CONTENT: confirm description]",
    },
    card: {
      liveLabel: "Live",
      githubLabel: "GitHub",
      liveAria: "View {name} live",
      githubAria: "View {name} on GitHub",
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
    intro: "[TODO_CONTENT: text below the Contact heading EN]",
    hintText: "Looking for a developer? ",
    hintHighlight: "Contact me!",
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
