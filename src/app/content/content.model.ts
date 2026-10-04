import { Language } from "../models/language";
import { ProjectId } from "../models/project";
import { SkillId } from "../models/skill";

/** One entry of the main navigation. */
export interface NavItem {
  label: string;
  /** Id of the section on the home page the link scrolls to. */
  fragment: string;
  /** Entries that exist only in the mobile menu overlay. */
  mobileOnly: boolean;
}

/** Language-independent facts about the site owner. */
export interface SiteInfo {
  name: string;
  /** Text logo: the last letter is rendered in the accent color. */
  logoStart: string;
  logoAccent: string;
  email: string;
  githubUrl: string;
  /** Empty until the profile URL is known; the icon is not rendered without it. */
  linkedinUrl: string;
  /** Path of the About-me photo; empty until the photo is delivered. */
  aboutPhotoSrc: string;
}

/** Texts of the header and the mobile menu. */
export interface HeaderContent {
  homeLinkLabel: string;
  navLabel: string;
  navItems: NavItem[];
  languageLabel: string;
  languageNames: Record<Language, string>;
  openMenu: string;
  closeMenu: string;
}

/** Texts of the hero section. */
export interface HeroContent {
  /** Rotated word left of the name ("I am"). */
  greeting: string;
  role: string;
  ctaLabel: string;
  scrollLabel: string;
}

/** One icon line of the About-me section. */
export interface AboutPoint {
  /** File name (without extension) in `public/icons`. */
  icon: string;
  text: string;
}

/** Texts of the About-me section. */
export interface AboutContent {
  title: string;
  /** Intro paragraphs in display order. */
  intro: string[];
  points: AboutPoint[];
  photoAlt: string;
  photoPlaceholder: string;
}

/** Texts of the skills section. */
export interface SkillsContent {
  title: string;
  intro: string;
  /** Visible name of every skill. */
  skillNames: Record<SkillId, string>;
  /** First part of the call-to-action heading, followed by the highlighted part. */
  ctaHeading: string;
  ctaHighlight: string;
  ctaText: string;
  ctaLabel: string;
}

/** Labels of one project card; `{name}` is replaced by the project name. */
export interface ProjectCardLabels {
  liveLabel: string;
  githubLabel: string;
  liveAria: string;
  githubAria: string;
  /** Label of the button that shows or hides the details; `{name}` is the project name. */
  toggleLabel: string;
  imageAlt: string;
  imagePlaceholder: string;
}

/** Texts of the portfolio section. */
export interface PortfolioContent {
  title: string;
  intro: string;
  /** Short description of every project. */
  descriptions: Record<ProjectId, string>;
  card: ProjectCardLabels;
}

/** Texts of the testimonial section. */
export interface TestimonialContent {
  /** Visually hidden heading of the section. */
  title: string;
  previousLabel: string;
  nextLabel: string;
  /** Label of a dot; `{n}` is the position of the testimonial. */
  goToLabel: string;
  /** Alt text of a portrait; `{name}` is the person's name. */
  avatarAlt: string;
}

/** Texts of one form field. */
export interface FormFieldContent {
  /** Visually hidden label (the design shows only the placeholder). */
  label: string;
  placeholder: string;
  error: string;
}

/** Texts of the contact section. */
export interface ContactContent {
  title: string;
  heading: string;
  intro: string;
  hintText: string;
  hintHighlight: string;
  name: FormFieldContent;
  email: FormFieldContent;
  message: FormFieldContent;
  /** Label of the hidden spam trap field. */
  honeypotLabel: string;
  privacy: { before: string; link: string; after: string; error: string };
  submitLabel: string;
  sendingLabel: string;
  success: string;
  failure: string;
  backToTop: string;
}

/** Social link labels shared by hero and footer. */
export interface SocialContent {
  label: string;
  githubLabel: string;
  emailLabel: string;
  linkedinLabel: string;
}

/** Texts of the footer. */
export interface FooterContent {
  homeLinkLabel: string;
  legalLabel: string;
  legalNotice: string;
  privacyPolicy: string;
}

/** One section of a legal text. */
export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

/** A legal text (legal notice or privacy policy). */
export interface LegalDocument {
  title: string;
  sections: LegalSection[];
}

/** Page-level texts. */
export interface PageMeta {
  /** Text of the browser tab (`document.title`). */
  title: string;
}

/** All visible texts of the site for one language. Extended phase by phase. */
export interface SiteContent {
  meta: PageMeta;
  site: SiteInfo;
  header: HeaderContent;
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  portfolio: PortfolioContent;
  testimonial: TestimonialContent;
  contact: ContactContent;
  social: SocialContent;
  footer: FooterContent;
  legalNotice: LegalDocument;
  privacyPolicy: LegalDocument;
}
