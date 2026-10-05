import { LegalDocument } from "./content.model";
import { OWNER } from "./owner";

const ADDRESS = `${OWNER.street}, ${OWNER.postalCode} ${OWNER.city}`;

export const LEGAL_NOTICE_DE: LegalDocument = {
  title: "Impressum",
  sections: [
    {
      heading: "Angaben gemäß § 5 DDG",
      paragraphs: [OWNER.name, OWNER.street, `${OWNER.postalCode} ${OWNER.city}`],
    },
    {
      heading: "Kontakt",
      paragraphs: [`E-Mail: ${OWNER.email}`],
    },
  ],
};

export const PRIVACY_POLICY_DE: LegalDocument = {
  title: "Datenschutzerklärung",
  sections: [
    {
      heading: "Verantwortlicher",
      paragraphs: [
        `Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist ${OWNER.name}, ${ADDRESS}.`,
        `Du erreichst mich per E-Mail unter ${OWNER.email}.`,
      ],
    },
    {
      heading: "Hosting",
      paragraphs: [
        "Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch notwendige Verbindungsdaten, zum Beispiel die IP-Adresse, damit die Seite ausgeliefert werden kann.",
        "Diese Website wird bei folgendem Hosting-Anbieter betrieben: [TODO_CONTENT: Name und Anschrift des Hosting-Anbieters]. Mit dem Anbieter besteht, soweit erforderlich, ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.",
        "Beim Aufruf der Seite können in Logfiles des Webservers insbesondere folgende Daten gespeichert werden: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser und Betriebssystem sowie die Referrer-URL. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO: Mein berechtigtes Interesse liegt im sicheren und stabilen Betrieb der Website. Die Speicherdauer richtet sich nach den Einstellungen des Hosting-Anbieters.",
      ],
    },
    {
      heading: "Kontaktformular",
      paragraphs: [
        "Wenn du das Kontaktformular nutzt, verarbeite ich die Angaben aus dem Formular (Name, E-Mail-Adresse und Nachricht), um deine Anfrage zu bearbeiten und zu beantworten.",
        "Rechtsgrundlage ist deine Einwilligung, die du mit dem Häkchen zur Datenschutzerklärung erteilst (Art. 6 Abs. 1 lit. a DSGVO). Du kannst sie jederzeit mit Wirkung für die Zukunft widerrufen.",
        "Deine Nachricht wird verschlüsselt (HTTPS) übertragen und per E-Mail an mein Postfach bei Google Mail (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) weitergeleitet. Empfänger ist ausschließlich ich. Ich speichere deine Angaben, bis deine Anfrage abschließend bearbeitet ist, und lösche sie danach, soweit keine gesetzliche Aufbewahrungspflicht entgegensteht.",
      ],
    },
    {
      heading: "Schriften",
      paragraphs: [
        "Die verwendete Schriftart Poppins ist lokal in diese Website eingebunden. Beim Aufruf wird keine Verbindung zu Servern von Google oder anderen Schriftanbietern aufgebaut.",
      ],
    },
    {
      heading: "Cookies und Analyse",
      paragraphs: [
        "Diese Website setzt keine Cookies, speichert keine Daten im Browser und verwendet keine Analyse- oder Tracking-Dienste.",
      ],
    },
    {
      heading: "Externe Links",
      paragraphs: [
        "Diese Website verlinkt auf externe Profile, zum Beispiel auf GitHub. Erst wenn du einen Link anklickst, werden Daten an den jeweiligen Anbieter übertragen. Dafür gilt dessen Datenschutzerklärung.",
      ],
    },
    {
      heading: "Deine Rechte",
      paragraphs: [
        "Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Eine erteilte Einwilligung kannst du jederzeit widerrufen (Art. 7 Abs. 3).",
        "Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).",
      ],
    },
  ],
};
