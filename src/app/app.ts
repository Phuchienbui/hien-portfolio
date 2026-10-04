import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";

/** Application shell: fixed header, page content and footer. */
@Component({
  imports: [Footer, Header, RouterOutlet],
  selector: "app-root",
  styleUrl: "./app.scss",
  templateUrl: "./app.html",
})
export class App {}
