import { Component, computed, inject } from "@angular/core";

import { ContentService } from "../../core/services/content";
import { PROJECTS } from "../../data/projects";
import { ProjectCard } from "../../shared/project-card/project-card";

/** Portfolio section: intro text and one card per project. */
@Component({
  imports: [ProjectCard],
  selector: "app-portfolio",
  styleUrl: "./portfolio.scss",
  templateUrl: "./portfolio.html",
})
export class Portfolio {
  private readonly contentService = inject(ContentService);

  protected readonly projects = PROJECTS;
  protected readonly text = computed(() => this.contentService.content().portfolio);
}
