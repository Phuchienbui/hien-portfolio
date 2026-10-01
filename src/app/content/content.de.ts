import { SiteContent } from "./content.model";

/** German texts. */
export const CONTENT_DE: SiteContent = {
  site: { name: "Phuc Hien Bui", logoStart: "Hie", logoAccent: "n" },
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
};
