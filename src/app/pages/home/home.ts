import { Component } from "@angular/core";

import { About } from "../../sections/about/about";
import { Hero } from "../../sections/hero/hero";

/** Landing page: composes the sections in display order. */
@Component({
  imports: [Hero, About],
  selector: "app-home",
  styleUrl: "./home.scss",
  templateUrl: "./home.html",
})
export class Home {}
