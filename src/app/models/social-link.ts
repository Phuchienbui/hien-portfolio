/** One professional profile or contact link shown in the hero and in the footer. */
export interface SocialLink {
  label: string;
  href: string;
  /** File name (without extension) of the hero icon in `public/icons`. */
  icon: string;
  /** File name (without extension) of the footer icon in `public/icons`. */
  footerIcon: string;
  /** External profiles open in a new tab; `mailto:` links do not. */
  isExternal: boolean;
}
