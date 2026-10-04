import { Component, computed, input, signal } from "@angular/core";

import { ProjectCardLabels } from "../../content/content.model";
import { Project } from "../../models/project";

/**
 * Project card: a laptop with the preview by default; on hover, focus or tap it shows the
 * description, technologies and the GitHub and live links (design "Version B").
 */
@Component({
  selector: "app-project-card",
  styleUrl: "./project-card.scss",
  templateUrl: "./project-card.html",
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly description = input.required<string>();
  readonly labels = input.required<ProjectCardLabels>();

  /** True after a tap, because touch screens have no hover. */
  protected readonly isActive = signal(false);

  protected readonly githubAriaLabel = computed(() =>
    this.labels().githubAria.replace("{name}", this.project().name),
  );
  protected readonly liveAriaLabel = computed(() =>
    this.labels().liveAria.replace("{name}", this.project().name),
  );
  protected readonly toggleAriaLabel = computed(() =>
    this.labels().toggleLabel.replace("{name}", this.project().name),
  );
  protected readonly imageAlt = computed(() =>
    this.labels().imageAlt.replace("{name}", this.project().name),
  );

  /** Shows or hides the details (tap on touch screens, Enter or Space on the keyboard). */
  protected toggleActive(): void {
    this.isActive.update((isActive) => !isActive);
  }
}
