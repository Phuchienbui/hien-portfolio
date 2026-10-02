import { Component, input } from "@angular/core";

/** One skill: icon above its label. */
@Component({
  selector: "app-skill-item",
  styleUrl: "./skill-item.scss",
  templateUrl: "./skill-item.html",
})
export class SkillItem {
  /** File name (without extension) of the icon in `public/icons`. */
  readonly icon = input.required<string>();
  readonly label = input.required<string>();
}
