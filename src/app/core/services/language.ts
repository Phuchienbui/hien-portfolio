import { DOCUMENT } from "@angular/common";
import { Service, inject, signal } from "@angular/core";

import { DEFAULT_LANGUAGE, Language } from "../../models/language";

/** Holds the active language and keeps the `lang` attribute of the page in sync. */
@Service()
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly language = signal<Language>(DEFAULT_LANGUAGE);

  /** Currently active language. */
  readonly currentLanguage = this.language.asReadonly();

  constructor() {
    this.applyDocumentLanguage(DEFAULT_LANGUAGE);
  }

  /** Switches the site to the given language. */
  setLanguage(language: Language): void {
    this.language.set(language);
    this.applyDocumentLanguage(language);
  }

  /** Writes the language to `<html lang>` for screen readers and hyphenation. */
  private applyDocumentLanguage(language: Language): void {
    this.document.documentElement.lang = language;
  }
}
