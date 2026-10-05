import { LegalDocument } from "./content.model";
import { OWNER } from "./owner";

const ADDRESS = `${OWNER.street}, ${OWNER.postalCode} ${OWNER.city}`;

export const LEGAL_NOTICE_EN: LegalDocument = {
  title: "Legal notice",
  sections: [
    {
      heading: "Information according to § 5 DDG",
      paragraphs: [OWNER.name, OWNER.street, `${OWNER.postalCode} ${OWNER.city}`],
    },
    {
      heading: "Contact",
      paragraphs: [`Email: ${OWNER.email}`],
    },
  ],
};

export const PRIVACY_POLICY_EN: LegalDocument = {
  title: "Privacy policy",
  sections: [
    {
      heading: "Controller",
      paragraphs: [
        `The controller for the processing of personal data on this website is ${OWNER.name}, ${ADDRESS}.`,
        `You can reach me by email at ${OWNER.email}.`,
      ],
    },
    {
      heading: "Hosting",
      paragraphs: [
        "When you open this website, the hosting provider processes technically necessary connection data, for example the IP address, so that the page can be delivered.",
        "This website is hosted by Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany. The server is located in [TODO_CONTENT: server location, Germany or Finland]. A data processing agreement under Art. 28 GDPR exists with Hetzner. [TODO_CONTENT: Übersetzung prüfen]",
        "When the page is opened, the web server stores [TODO_CONTENT: which data exactly, e.g. IP address shortened or complete, date and time, requested page, browser and operating system, referrer URL] in log files. The legal basis is Art. 6(1)(f) GDPR: my legitimate interest is the secure and stable operation of the website. The log files are deleted after [TODO_CONTENT: number, e.g. 7] days. [TODO_CONTENT: Übersetzung prüfen]",
      ],
    },
    {
      heading: "Contact form",
      paragraphs: [
        "If you use the contact form, I process the information from the form (name, email address and message) to handle and answer your request.",
        "The legal basis is your consent, which you give by ticking the privacy box (Art. 6(1)(a) GDPR). You can withdraw it at any time with effect for the future.",
        "Your message is transmitted to my server in encrypted form (HTTPS) and forwarded by email to my mailbox at [TODO_CONTENT: mailbox provider, name and address]. I am the only recipient. I store your details until your request has been dealt with and delete them afterwards, after [TODO_CONTENT: number, e.g. 6] months at the latest, unless a legal retention obligation applies. [TODO_CONTENT: Übersetzung prüfen]",
      ],
    },
    {
      heading: "Fonts",
      paragraphs: [
        "The font Poppins is embedded locally in this website. No connection to servers of Google or other font providers is made when you open the page.",
      ],
    },
    {
      heading: "Cookies and analytics",
      paragraphs: [
        "This website sets no cookies, stores no data in your browser and uses no analytics or tracking services.",
      ],
    },
    {
      heading: "External links",
      paragraphs: [
        "This website links to external profiles, for example on GitHub. Data is only transferred to the respective provider once you click a link. Its privacy policy applies.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection (Art. 21). You can withdraw a given consent at any time (Art. 7(3)).",
        "You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR).",
      ],
    },
  ],
};
