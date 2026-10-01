import { Service, computed, inject } from "@angular/core";

import { CONTENT } from "../../content/content";
import { SiteContent } from "../../content/content.model";
import { LanguageService } from "./language";

/** Provides the texts of the active language. */
@Service()
export class ContentService {
  private readonly languageService = inject(LanguageService);

  /** Texts of the currently active language. */
  readonly content = computed<SiteContent>(() => CONTENT[this.languageService.currentLanguage()]);
}
