import { Component, effect, inject } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";

import { ContentService } from "./core/services/content";
import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";
import { PageBackground } from "./layout/page-background/page-background";

/** Application shell: fixed header, page content and footer. Keeps the tab title in the active language. */
@Component({
  imports: [Footer, Header, PageBackground, RouterOutlet],
  selector: "app-root",
  styleUrl: "./app.scss",
  templateUrl: "./app.html",
})
export class App {
  private readonly title = inject(Title);
  private readonly contentService = inject(ContentService);

  constructor() {
    effect(() => this.title.setTitle(this.contentService.content().meta.title));
  }
}
