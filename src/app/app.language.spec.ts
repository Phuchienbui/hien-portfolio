import { provideHttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Title } from "@angular/platform-browser";
import { provideRouter, Router } from "@angular/router";

import { App } from "./app";
import { ROUTES } from "./app.routes";
import { CONTENT_DE } from "./content/content.de";
import { CONTENT_EN } from "./content/content.en";
import { LanguageService } from "./core/services/language";

describe("App language switch", () => {
  let fixture: ComponentFixture<App>;
  let element: HTMLElement;

  /** Switches the language and waits until the view is updated. */
  async function switchTo(language: "de" | "en"): Promise<void> {
    TestBed.inject(LanguageService).setLanguage(language);
    await fixture.whenStable();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(ROUTES), provideHttpClient()],
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    element = fixture.nativeElement;
    await TestBed.inject(Router).navigateByUrl("/");
    await fixture.whenStable();
  });

  it("starts in German", () => {
    expect(document.documentElement.lang).toBe("de");
    expect(element.querySelector(".header__nav-link")?.textContent).toContain(
      CONTENT_DE.header.navItems[0].label,
    );
  });

  it("updates header, contact form, footer, page language and tab title", async () => {
    await switchTo("en");
    expect(element.querySelector(".header__nav-link")?.textContent).toContain(
      CONTENT_EN.header.navItems[0].label,
    );
    expect(element.querySelector("#contact-name")?.getAttribute("placeholder")).toBe(
      CONTENT_EN.contact.name.placeholder,
    );
    expect(element.querySelector(".footer__legal-link")?.textContent).toContain(
      CONTENT_EN.footer.legalNotice,
    );
    expect(document.documentElement.lang).toBe("en");
    expect(TestBed.inject(Title).getTitle()).toBe(CONTENT_EN.meta.title);
  });

  it("switches back to German", async () => {
    await switchTo("en");
    await switchTo("de");
    expect(element.querySelector(".footer__legal-link")?.textContent).toContain(
      CONTENT_DE.footer.legalNotice,
    );
  });

  it("translates the legal pages too", async () => {
    await switchTo("en");
    await TestBed.inject(Router).navigateByUrl("/privacy-policy");
    await fixture.whenStable();
    expect(element.querySelector("h1")?.textContent).toBe(CONTENT_EN.privacyPolicy.title);
  });
});
