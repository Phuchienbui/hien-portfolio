import { Component, computed, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { ContentService } from "../../core/services/content";
import { SocialLinksService } from "../../core/services/social-links";

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
  protected readonly social = computed(() => this.contentService.content().social);
  protected readonly socialLinks = inject(SocialLinksService).links;
}
