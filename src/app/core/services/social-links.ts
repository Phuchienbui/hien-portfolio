import { Service, computed, inject } from "@angular/core";

import { SiteInfo, SocialContent } from "../../content/content.model";
import { SocialLink } from "../../models/social-link";
import { ContentService } from "./content";

function githubLink(site: SiteInfo, social: SocialContent): SocialLink {
  return {
    label: social.githubLabel,
    href: site.githubUrl,
    icon: "social-github",
    footerIcon: "social-github",
    isExternal: true,
  };
}

function emailLink(site: SiteInfo, social: SocialContent): SocialLink {
  return {
    label: social.emailLabel,
    href: `mailto:${site.email}`,
    icon: "social-email",
    footerIcon: "social-email-footer",
    isExternal: false,
  };
}

function linkedinLink(site: SiteInfo, social: SocialContent): SocialLink {
  return {
    label: social.linkedinLabel,
    href: site.linkedinUrl,
    icon: "social-linkedin",
    footerIcon: "social-linkedin",
    isExternal: true,
  };
}

@Service()
export class SocialLinksService {
  private readonly contentService = inject(ContentService);

  readonly links = computed<SocialLink[]>(() => {
    const { site, social } = this.contentService.content();
    return [githubLink(site, social), emailLink(site, social), linkedinLink(site, social)].filter(
      (link) => link.href !== "",
    );
  });
}
