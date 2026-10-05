import { Service, computed, inject } from "@angular/core";

import { CONTENT } from "../../content/content";
import { SiteContent } from "../../content/content.model";
import { LanguageService } from "./language";

@Service()
export class ContentService {
  private readonly languageService = inject(LanguageService);

  readonly content = computed<SiteContent>(() => CONTENT[this.languageService.currentLanguage()]);
}
