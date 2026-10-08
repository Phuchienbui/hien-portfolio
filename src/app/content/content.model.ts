import { Language } from "../models/language";
import { ProjectId } from "../models/project";
import { SkillId } from "../models/skill";

export interface NavItem {
  label: string;
  fragment: string;
  mobileOnly: boolean;
}

export interface SiteInfo {
  name: string;
  logoStart: string;
  logoAccent: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  aboutPhotoSrc: string;
}

export interface HeaderContent {
  homeLinkLabel: string;
  navLabel: string;
  navItems: NavItem[];
  languageLabel: string;
  languageNames: Record<Language, string>;
  openMenu: string;
  closeMenu: string;
}

export interface HeroContent {
  greeting: string;
  role: string;
  ctaLabel: string;
  scrollLabel: string;
}

export interface AboutPoint {
  icon: string;
  text: string;
}

export interface AboutContent {
  title: string;
  intro: string[];
  points: AboutPoint[];
  photoAlt: string;
  photoPlaceholder: string;
}

export interface SkillsContent {
  title: string;
  intro: string;
  skillNames: Record<SkillId, string>;
  ctaHeading: string;
  ctaHighlight: string;
  ctaText: string;
  ctaLabel: string;
}

export interface ProjectCardLabels {
  liveLabel: string;
  githubLabel: string;
  liveAria: string;
  githubAria: string;
  liveUnavailableAria: string;
  githubUnavailableAria: string;
  toggleLabel: string;
  imageAlt: string;
  imagePlaceholder: string;
  comingSoonLabel: string;
}

export interface PortfolioContent {
  title: string;
  intro: string;
  descriptions: Record<ProjectId, string>;
  card: ProjectCardLabels;
}

export interface TestimonialContent {
  title: string;
  previousLabel: string;
  nextLabel: string;
  goToLabel: string;
  avatarAlt: string;
}

export interface FormFieldContent {
  label: string;
  placeholder: string;
  error: string;
}

export interface ContactContent {
  title: string;
  heading: string;
  intro: string;
  name: FormFieldContent;
  email: FormFieldContent;
  message: FormFieldContent;
  honeypotLabel: string;
  privacy: { before: string; link: string; after: string; error: string };
  submitLabel: string;
  sendingLabel: string;
  success: string;
  failure: string;
  backToTop: string;
}

export interface SocialContent {
  label: string;
  githubLabel: string;
  emailLabel: string;
  linkedinLabel: string;
}

export interface FooterContent {
  homeLinkLabel: string;
  legalLabel: string;
  legalNotice: string;
  privacyPolicy: string;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDocument {
  title: string;
  sections: LegalSection[];
}

export interface PageMeta {
  title: string;
  description: string;
  locale: string;
}

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
