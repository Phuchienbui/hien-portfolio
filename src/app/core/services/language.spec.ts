import { DOCUMENT } from "@angular/common";
import { TestBed } from "@angular/core/testing";

import { LanguageService } from "./language";

describe("LanguageService", () => {
  let service: LanguageService;
  let html: HTMLElement;

  beforeEach(() => {
    service = TestBed.inject(LanguageService);
    html = TestBed.inject(DOCUMENT).documentElement;
  });

  it("should start with German and set the html lang attribute", () => {
    expect(service.currentLanguage()).toBe("de");
    expect(html.lang).toBe("de");
  });

  it("should switch the language and update the html lang attribute", () => {
    service.setLanguage("en");
    expect(service.currentLanguage()).toBe("en");
    expect(html.lang).toBe("en");
  });
});
