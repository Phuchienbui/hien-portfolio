import { TestBed } from "@angular/core/testing";

import { CONTENT } from "../../content/content";
import { ContentService } from "./content";
import { LanguageService } from "./language";

describe("ContentService", () => {
  it("should follow the active language", () => {
    const language = TestBed.inject(LanguageService);
    const service = TestBed.inject(ContentService);
    expect(service.content()).toBe(CONTENT.de);
    language.setLanguage("en");
    expect(service.content()).toBe(CONTENT.en);
  });
});
