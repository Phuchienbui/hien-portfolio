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

/** All visible texts of the site for one language. Extended phase by phase. */
export interface SiteContent {
  site: SiteInfo;
  header: HeaderContent;
}
