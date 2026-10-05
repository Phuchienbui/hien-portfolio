import { Component, effect, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";

import { PageMeta } from "./content/content.model";
import { ContentService } from "./core/services/content";
import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";
import { PageBackground } from "./layout/page-background/page-background";

@Component({
  imports: [Footer, Header, PageBackground, RouterOutlet],
  selector: "app-root",
  styleUrl: "./app.scss",
  templateUrl: "./app.html",
})
export class App {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly contentService = inject(ContentService);

  constructor() {
    effect(() => this.applyPageMeta(this.contentService.content().meta));
  }

  private applyPageMeta(meta: PageMeta): void {
    this.title.setTitle(meta.title);
    this.meta.updateTag({ name: "description", content: meta.description });
    this.meta.updateTag({ property: "og:title", content: meta.title });
    this.meta.updateTag({ property: "og:description", content: meta.description });
    this.meta.updateTag({ property: "og:locale", content: meta.locale });
  }
}
