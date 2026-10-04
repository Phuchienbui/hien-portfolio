import { SiteContent } from "./content.model";
import { LEGAL_NOTICE_DE, PRIVACY_POLICY_DE } from "./legal.de";

/** German texts. */
export const CONTENT_DE: SiteContent = {
  meta: { title: "Phuc Hien Bui – Portfolio" },
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
  testimonial: {
    title: "Referenzen",
    previousLabel: "Vorheriges Zitat",
    nextLabel: "Nächstes Zitat",
    goToLabel: "Zitat {n} anzeigen",
    avatarAlt: "Porträt von {name}",
  },
  contact: {
    title: "Kontakt",
    heading: "Hast du ein Problem zu lösen?",
    intro: "[TODO_CONTENT: Text unter der Überschrift Kontakt DE]",
    hintText: "Suchst du einen Entwickler? ",
    hintHighlight: "Schreib mir!",
    name: { label: "Name", placeholder: "Dein Name", error: "Bitte gib mindestens 2 Zeichen ein." },
    email: {
      label: "E-Mail",
      placeholder: "Deine E-Mail",
      error: "Bitte gib eine gültige E-Mail-Adresse ein.",
    },
    message: {
      label: "Nachricht",
      placeholder: "Deine Nachricht",
      error: "Bitte gib mindestens 10 Zeichen ein.",
    },
    honeypotLabel: "Website (bitte leer lassen)",
    privacy: {
      before: "Ich habe die ",
      link: "Datenschutzerklärung",
      after: " gelesen und stimme der Verarbeitung meiner Daten zu.",
      error: "Bitte stimme der Datenschutzerklärung zu.",
    },
    submitLabel: "Nachricht senden :)",
    sendingLabel: "Wird gesendet …",
    success: "Danke! Deine Nachricht wurde gesendet.",
    failure:
      "Das Senden hat leider nicht geklappt. Bitte versuche es später noch einmal oder schreibe mir per E-Mail.",
    backToTop: "Zurück nach oben",
  },
  social: {
    label: "Profile und Kontakt",
    githubLabel: "GitHub-Profil",
    emailLabel: "E-Mail schreiben",
    linkedinLabel: "LinkedIn-Profil",
  },
  footer: {
    homeLinkLabel: "Phuc Hien Bui – zur Startseite",
    legalLabel: "Rechtliches",
    legalNotice: "Impressum",
    privacyPolicy: "Datenschutz",
  },
  legalNotice: LEGAL_NOTICE_DE,
  privacyPolicy: PRIVACY_POLICY_DE,
};
