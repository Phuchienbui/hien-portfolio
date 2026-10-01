import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

/** Application shell. Header and footer are added in later phases. */
@Component({
  imports: [RouterOutlet],
  selector: "app-root",
  styleUrl: "./app.scss",
  templateUrl: "./app.html",
})
export class App {}
