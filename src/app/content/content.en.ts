import { SiteContent } from "./content.model";

/** English texts. */
export const CONTENT_EN: SiteContent = {
  site: { name: "Phuc Hien Bui", logoStart: "Hie", logoAccent: "n" },
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
};
