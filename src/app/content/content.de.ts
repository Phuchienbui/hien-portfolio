import { SiteContent } from "./content.model";

/** German texts. */
export const CONTENT_DE: SiteContent = {
  site: {
    name: "Phuc Hien Bui",
    logoStart: "Hie",
    logoAccent: "n",
    email: "phuchienbui2@gmail.com",
    githubUrl: "https://github.com/Phuchienbui",
    linkedinUrl: "",
  },
  header: {
    homeLinkLabel: "Phuc Hien Bui – zur Startseite",
    navLabel: "Hauptnavigation",
    navItems: [
      { label: "Über mich", fragment: "about", mobileOnly: false },
      { label: "Skills", fragment: "skills", mobileOnly: false },
      { label: "Portfolio", fragment: "portfolio", mobileOnly: false },
      { label: "Kontakt", fragment: "contact", mobileOnly: true },
    ],
    languageLabel: "Sprache wählen",
    languageNames: { de: "Deutsch", en: "English" },
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
  hero: {
    greeting: "Ich bin",
    role: "[TODO_CONTENT: Rolle/Titel DE]",
    ctaLabel: "Sprich mich an!",
    socialLabel: "Profile und Kontakt",
    githubLabel: "GitHub-Profil",
    emailLabel: "E-Mail schreiben",
    linkedinLabel: "LinkedIn-Profil",
    scrollLabel: "Nach unten scrollen",
  },
};
