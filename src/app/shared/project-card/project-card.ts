import { Component, computed, input } from "@angular/core";

import { ProjectCardLabels } from "../../content/content.model";
import { Project } from "../../models/project";

/** Card with preview, title, description, technologies and links of one project. */
@Component({
  selector: "app-project-card",
  styleUrl: "./project-card.scss",
  templateUrl: "./project-card.html",
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly description = input.required<string>();
  readonly labels = input.required<ProjectCardLabels>();

  protected readonly githubAriaLabel = computed(() =>
    this.labels().githubAria.replace("{name}", this.project().name),
  );
  protected readonly liveAriaLabel = computed(() =>
    this.labels().liveAria.replace("{name}", this.project().name),
  );
  protected readonly imageAlt = computed(() =>
    this.labels().imageAlt.replace("{name}", this.project().name),
  );
}
