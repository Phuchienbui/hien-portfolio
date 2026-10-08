import { SiteContent } from "./content.model";
import { LEGAL_NOTICE_DE, PRIVACY_POLICY_DE } from "./legal.de";

export const CONTENT_DE: SiteContent = {
  meta: {
    title: "Phuc Hien Bui – Portfolio",
    description:
      "Portfolio von Phuc Hien Bui: Fachinformatiker für Anwendungsentwicklung in Umschulung. Webprojekte mit Angular, TypeScript und SCSS.",
    locale: "de_DE",
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
    role: "Fachinformatiker Anwendungs­entwicklung",
    ctaLabel: "Sprich mich an!",
    scrollLabel: "Nach unten scrollen",
  },
  about: {
    title: "Über mich",
    intro: [
      "Ich bin Phuc Hien Bui und mache eine Umschulung zum Fachinformatiker für Anwendungsentwicklung. Ich baue Webanwendungen mit Angular, TypeScript und SCSS. Mir geht es nicht darum, nur Syntax zu tippen, sondern zu verstehen, warum Code so aufgebaut ist, wie er aufgebaut ist.",
    ],
    points: [
      {
        icon: "about-location-desktop",
        text: "Ich lebe in Dortmund. Ich arbeite gern vor Ort im Team und bin auch für Hybrid-Modelle offen.",
      },
      {
        icon: "about-bulb-desktop",
        text: "Ich bin vor Kurzem in die Softwareentwicklung eingestiegen und lerne jeden Tag dazu. Ich nehme Feedback offen an, schreibe Gelerntes in eigenen Projekten wie dem Pokédex und El Pollo Loco auf die Probe und halte es mit Anki langfristig im Kopf.",
      },
      {
        icon: "about-puzzle-desktop",
        text: "Probleme gehe ich systematisch an: Ich zerlege sie in kleine Teile, suche die Ursache statt am Symptom zu flicken und prüfe, ob meine Lösung wirklich hält. Strategiespiele wie Schach schulen mein vorausschauendes Denken.",
      },
    ],
    photoAlt: "Porträt von Phuc Hien Bui",
    photoPlaceholder: "Foto nicht verfügbar",
  },
  skills: {
    title: "Skills",
    intro:
      "Ich lasse mich zum Softwareentwickler mit Schwerpunkt Webentwicklung umschulen. In meinen Projekten, vom Browsergame in JavaScript über einen Pokédex mit REST-API bis zu diesem Portfolio in Angular, arbeite ich mit HTML, CSS/SCSS, JavaScript und TypeScript und verwalte meinen Code mit Git und GitHub. Mir ist wichtig zu verstehen, warum etwas funktioniert, nicht nur, wie man es tippt. Das Web verändert sich schnell, deshalb lerne ich jeden Tag weiter.",
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
    ctaText:
      "Ein neues Framework, eine Sprache wie Python oder ein Tool, das ich noch nicht kenne: Ich arbeite mich gern in neue Technologien ein und lerne systematisch mit praktischen Projekten und Spaced Repetition. Sag mir, womit dein Team arbeitet, dann arbeite ich mich ein.",
    ctaLabel: "Kontakt aufnehmen",
  },
  portfolio: {
    title: "Portfolio",
    intro:
      "Eine Auswahl meiner Projekte, vom Browsergame bis zur Chat-App. Fahre mit der Maus über eine Karte oder tippe sie an, um Details und Links zu sehen.",
    descriptions: {
      "el-pollo-loco": "Browsergame, umgesetzt mit JavaScript, HTML und CSS.",
      join: "Aufgabenverwaltung nach dem Kanban-Prinzip: Aufgaben lassen sich per Drag-and-drop anlegen und organisieren sowie Nutzern und Kategorien zuweisen.",
      dabubble:
        "Chat-App nach dem Vorbild von Slack für die Zusammenarbeit im Team, mit übersichtlicher Oberfläche, Echtzeit-Nachrichten und klar gegliederten Kanälen.",
      pokedex: "Pokédex als Webanwendung mit REST-API zum Erkunden von Pokémon-Daten.",
    },
    card: {
      liveLabel: "Live-Test",
      githubLabel: "GitHub",
      liveAria: "{name} live ansehen",
      githubAria: "{name} auf GitHub ansehen",
      liveUnavailableAria: "{name} live: noch nicht verfügbar",
      githubUnavailableAria: "{name} auf GitHub: noch nicht verfügbar",
      toggleLabel: "Details zu {name} anzeigen",
      imageAlt: "Vorschau von {name}",
      imagePlaceholder: "Vorschau nicht verfügbar",
      comingSoonLabel: "Demnächst",
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
    intro:
      "Du hast eine Idee, ein Projekt oder eine offene Stelle? Schreib mir kurz, worum es geht. Ich melde mich so schnell wie möglich bei dir.",
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
