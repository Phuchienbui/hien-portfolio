import { NgOptimizedImage } from "@angular/common";
import { Component, computed, input, signal } from "@angular/core";

import { ProjectCardLabels } from "../../content/content.model";
import { Project } from "../../models/project";

@Component({
  imports: [NgOptimizedImage],
  selector: "app-project-card",
  styleUrl: "./project-card.scss",
  templateUrl: "./project-card.html",
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly description = input.required<string>();
  readonly labels = input.required<ProjectCardLabels>();

  protected readonly isActive = signal(false);

  protected readonly githubAriaLabel = computed(() =>
    this.labels().githubAria.replace("{name}", this.project().name),
  );
  protected readonly liveAriaLabel = computed(() =>
    this.labels().liveAria.replace("{name}", this.project().name),
  );
  protected readonly githubUnavailableAriaLabel = computed(() =>
    this.labels().githubUnavailableAria.replace("{name}", this.project().name),
  );
  protected readonly liveUnavailableAriaLabel = computed(() =>
    this.labels().liveUnavailableAria.replace("{name}", this.project().name),
  );
  protected readonly toggleAriaLabel = computed(() =>
    this.labels().toggleLabel.replace("{name}", this.project().name),
  );
  protected readonly imageAlt = computed(() =>
    this.labels().imageAlt.replace("{name}", this.project().name),
  );

  protected toggleActive(): void {
    this.isActive.update((isActive) => !isActive);
  }
}
