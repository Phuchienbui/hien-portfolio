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
    aboutPhotoSrc: "",
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
    // Soft hyphen (U+00AD) marks where the long word may break on narrow screens.
    role: "Fachinformatiker Anwendungs­entwicklung",
    ctaLabel: "Sprich mich an!",
    socialLabel: "Profile und Kontakt",
    githubLabel: "GitHub-Profil",
    emailLabel: "E-Mail schreiben",
    linkedinLabel: "LinkedIn-Profil",
    scrollLabel: "Nach unten scrollen",
  },
  about: {
    title: "Über mich",
    intro: ["[TODO_CONTENT: Intro-Text Über mich DE]"],
    points: [
      {
        icon: "about-location-desktop",
        text: "Ich lebe in Dortmund. [TODO_CONTENT: Remote-Bereitschaft DE]",
      },
      {
        icon: "about-bulb-desktop",
        text: "[TODO_CONTENT: Offenheit und Lernbereitschaft DE]",
      },
      { icon: "about-puzzle-desktop", text: "[TODO_CONTENT: Problemlösung DE]" },
    ],
    photoAlt: "Porträt von Phuc Hien Bui",
    photoPlaceholder: "[TODO_CONTENT: Foto Über mich]",
  },
  skills: {
    title: "Skills",
    intro: "[TODO_CONTENT: Text neben dem Skill-Raster DE]",
    skillNames: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      typescript: "TypeScript",
      angular: "Angular",
      git: "Git",
      "rest-api": "REST-API",
      scrum: "Scrum",
      "continually-learning": "Ständig lernend",
    },
    ctaHeading: "Du suchst einen ",
    ctaHighlight: "anderen Skill?",
    ctaText: "[TODO_CONTENT: Text unter der Frage DE]",
    ctaLabel: "Kontakt aufnehmen",
  },
  portfolio: {
    title: "Portfolio",
    intro: "[TODO_CONTENT: Text unter dem Titel Portfolio DE]",
    descriptions: {
      bestellapp:
        "[TODO_CONTENT: Beschreibung BestellApp, das Repository ist privat und nicht lesbar]",
      "memory-duel":
        "Memory-Spiel für zwei Spieler im Browser mit vier Themen und drei Spielfeldgrößen. [TODO_CONTENT: Beschreibung vom User bestätigen]",
      "el-pollo-loco":
        "Browser-Projekt mit JavaScript, HTML und CSS. Das Repository hat keine README. [TODO_CONTENT: Beschreibung vom User bestätigen]",
      pokedex:
        "Webanwendung zum Erkunden von Pokémon-Daten, laut Repository noch in Arbeit. [TODO_CONTENT: Beschreibung vom User bestätigen]",
    },
    card: {
      liveLabel: "Live",
      githubLabel: "GitHub",
      liveAria: "{name} live ansehen",
      githubAria: "{name} auf GitHub ansehen",
      imageAlt: "Vorschau von {name}",
      imagePlaceholder: "[TODO_CONTENT: Vorschaubild]",
    },
  },
};
