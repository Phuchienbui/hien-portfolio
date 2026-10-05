import { Component, input } from "@angular/core";

@Component({
  selector: "app-skill-item",
  styleUrl: "./skill-item.scss",
  templateUrl: "./skill-item.html",
})
export class SkillItem {
  readonly icon = input.required<string>();
  readonly label = input.required<string>();
}
