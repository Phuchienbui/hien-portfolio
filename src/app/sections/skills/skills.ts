import { Component, computed, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { ContentService } from "../../core/services/content";
import { SKILLS } from "../../data/skills";
import { SkillItem } from "../../shared/skill-item/skill-item";

/** Skills section: icon grid, short text and a call to action. */
@Component({
  imports: [RouterLink, SkillItem],
  selector: "app-skills",
  styleUrl: "./skills.scss",
  templateUrl: "./skills.html",
})
export class Skills {
  private readonly contentService = inject(ContentService);

  protected readonly skills = SKILLS;
  protected readonly text = computed(() => this.contentService.content().skills);
}
