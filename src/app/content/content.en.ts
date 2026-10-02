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
};
