import { Component } from "@angular/core";

import { About } from "../../sections/about/about";
import { Hero } from "../../sections/hero/hero";
import { Portfolio } from "../../sections/portfolio/portfolio";
import { Skills } from "../../sections/skills/skills";

/** Landing page: composes the sections in display order. */
@Component({
  imports: [Hero, About, Skills, Portfolio],
  selector: "app-home",
  styleUrl: "./home.scss",
  templateUrl: "./home.html",
})
export class Home {}
