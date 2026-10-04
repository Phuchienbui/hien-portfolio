import { LegalDocument } from "./content.model";
import { OWNER } from "./owner";

const ADDRESS = `${OWNER.street}, ${OWNER.postalCode} ${OWNER.city}`;

/** Legal notice. Draft from the facts in CONTENT_INPUT.md, to be reviewed by the owner. */
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

/** Privacy policy. Draft from the facts in CONTENT_INPUT.md, to be reviewed by the owner. */
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
        "[TODO_CONTENT: name and address of the hosting provider and retention period of the server logs]",
      ],
    },
    {
      heading: "Contact form",
      paragraphs: [
        "If you use the contact form, I process the information from the form (name, email address and message) to handle and answer your request.",
        "The legal basis is your consent, which you give by ticking the privacy box (Art. 6(1)(a) GDPR). You can withdraw it at any time with effect for the future.",
        "[TODO_CONTENT: recipient and transmission path of the messages and retention period, once sending is set up]",
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
