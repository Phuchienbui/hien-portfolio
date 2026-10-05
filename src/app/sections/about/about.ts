import { NgOptimizedImage } from "@angular/common";
import { Component, computed, inject } from "@angular/core";

import { ContentService } from "../../core/services/content";

@Component({
  imports: [NgOptimizedImage],
  selector: "app-about",
  styleUrl: "./about.scss",
  templateUrl: "./about.html",
})
export class About {
  private readonly contentService = inject(ContentService);

  protected readonly photoSrc = computed(() => this.contentService.content().site.aboutPhotoSrc);
  protected readonly text = computed(() => this.contentService.content().about);
}
