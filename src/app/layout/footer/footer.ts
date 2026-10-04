import { Component, computed, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { ContentService } from "../../core/services/content";
import { SocialLinksService } from "../../core/services/social-links";

/** Site footer with logo, copyright, social links and the legal pages. */
@Component({
  imports: [RouterLink],
  selector: "app-footer",
  styleUrl: "./footer.scss",
  templateUrl: "./footer.html",
})
export class Footer {
  private readonly contentService = inject(ContentService);

  protected readonly site = computed(() => this.contentService.content().site);
  protected readonly text = computed(() => this.contentService.content().footer);
  protected readonly social = computed(() => this.contentService.content().social);
  protected readonly socialLinks = inject(SocialLinksService).links;
  /** The copyright year always matches the current year. */
  protected readonly year = new Date().getFullYear();
}
