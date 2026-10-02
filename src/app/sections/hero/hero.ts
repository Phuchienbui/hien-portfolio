import { Component, computed, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { ContentService } from "../../core/services/content";

/** One social link in the hero. */
interface SocialLink {
  label: string;
  href: string;
  icon: string;
  isExternal: boolean;
}

/** Full-viewport hero with name, role, call to action and social links. */
@Component({
  imports: [RouterLink],
  selector: "app-hero",
  styleUrl: "./hero.scss",
  templateUrl: "./hero.html",
})
export class Hero {
  private readonly contentService = inject(ContentService);

  protected readonly site = computed(() => this.contentService.content().site);
  protected readonly text = computed(() => this.contentService.content().hero);

  /** Social links in display order; LinkedIn is skipped until its URL is known. */
  protected readonly socialLinks = computed<SocialLink[]>(() => {
    const { githubUrl, email, linkedinUrl } = this.site();
    const text = this.text();
    const links: SocialLink[] = [
      { label: text.githubLabel, href: githubUrl, icon: "social-github", isExternal: true },
      { label: text.emailLabel, href: `mailto:${email}`, icon: "social-email", isExternal: false },
      { label: text.linkedinLabel, href: linkedinUrl, icon: "social-linkedin", isExternal: true },
    ];
    return links.filter((link) => link.href !== "");
  });
}
