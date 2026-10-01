import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Header } from "./layout/header/header";

/** Application shell with the fixed header. The footer follows in a later phase. */
@Component({
  imports: [Header, RouterOutlet],
  selector: "app-root",
  styleUrl: "./app.scss",
  templateUrl: "./app.html",
})
export class App {}
