import { DOCUMENT } from "@angular/common";
import { Service, inject, signal } from "@angular/core";

import { DEFAULT_LANGUAGE, Language } from "../../models/language";

@Service()
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly language = signal<Language>(DEFAULT_LANGUAGE);

  readonly currentLanguage = this.language.asReadonly();

  constructor() {
    this.applyDocumentLanguage(DEFAULT_LANGUAGE);
  }

  setLanguage(language: Language): void {
    this.language.set(language);
    this.applyDocumentLanguage(language);
  }

  private applyDocumentLanguage(language: Language): void {
    this.document.documentElement.lang = language;
  }
}
