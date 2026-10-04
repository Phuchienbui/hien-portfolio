import { Service, computed, inject } from "@angular/core";

import { SiteInfo, SocialContent } from "../../content/content.model";
import { SocialLink } from "../../models/social-link";
import { ContentService } from "./content";

/** GitHub profile link. */
function githubLink(site: SiteInfo, social: SocialContent): SocialLink {
  return {
    label: social.githubLabel,
    href: site.githubUrl,
    icon: "social-github",
    footerIcon: "social-github",
    isExternal: true,
  };
}

/** E-mail link; the footer uses its own icon variant. */
function emailLink(site: SiteInfo, social: SocialContent): SocialLink {
  return {
    label: social.emailLabel,
    href: `mailto:${site.email}`,
    icon: "social-email",
    footerIcon: "social-email-footer",
    isExternal: false,
  };
}

/** LinkedIn profile link; its URL is empty until the owner delivers it. */
function linkedinLink(site: SiteInfo, social: SocialContent): SocialLink {
  return {
    label: social.linkedinLabel,
    href: site.linkedinUrl,
    icon: "social-linkedin",
    footerIcon: "social-linkedin",
    isExternal: true,
  };
}

/** Provides the social links shared by hero and footer. */
@Service()
export class SocialLinksService {
  private readonly contentService = inject(ContentService);

  /** Links in display order; entries without a known URL (e.g. LinkedIn) are skipped. */
  readonly links = computed<SocialLink[]>(() => {
    const { site, social } = this.contentService.content();
    return [githubLink(site, social), emailLink(site, social), linkedinLink(site, social)].filter(
      (link) => link.href !== "",
    );
  });
}
