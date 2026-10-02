import { Component } from "@angular/core";

import { Hero } from "../../sections/hero/hero";

/** Landing page: composes the sections in display order. */
@Component({
  imports: [Hero],
  selector: "app-home",
  styleUrl: "./home.scss",
  templateUrl: "./home.html",
})
export class Home {}
