import { Language } from "../models/language";

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
  socialLabel: string;
  githubLabel: string;
  emailLabel: string;
  linkedinLabel: string;
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

/** All visible texts of the site for one language. Extended phase by phase. */
export interface SiteContent {
  site: SiteInfo;
  header: HeaderContent;
  hero: HeroContent;
  about: AboutContent;
}
