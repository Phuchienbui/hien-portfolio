import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter, Router } from "@angular/router";

import { LanguageService } from "../../core/services/language";
import { Header } from "./header";

describe("Header", () => {
  let fixture: ComponentFixture<Header>;
  let element: HTMLElement;

  const query = <T extends HTMLElement>(selector: string): T =>
    element.querySelector<T>(selector) as T;

  const openMenu = async (): Promise<void> => {
    query<HTMLButtonElement>(".header__burger").click();
    await fixture.whenStable();
  };

  const isMenuOpen = (): boolean => query(".header__menu").classList.contains("header__menu--open");

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(Header);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it("should render the logo, section links and both language buttons", () => {
    expect(query(".header__logo").textContent).toContain("Hie");
    expect(element.querySelectorAll(".header__nav-link").length).toBe(4);
    expect(element.querySelectorAll(".header__language").length).toBe(2);
  });

  it("should open and close the menu with the burger button", async () => {
    await openMenu();
    expect(query(".header__burger").getAttribute("aria-expanded")).toBe("true");
    expect(isMenuOpen()).toBe(true);
    expect(document.body.style.overflow).toBe("hidden");
    await openMenu();
    expect(query(".header__burger").getAttribute("aria-expanded")).toBe("false");
    expect(document.body.style.overflow).toBe("");
  });

  it("should close the menu on Escape", async () => {
    await openMenu();
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await fixture.whenStable();
    expect(isMenuOpen()).toBe(false);
  });

  it("should close the menu when a link is clicked", async () => {
    await openMenu();
    query<HTMLAnchorElement>(".header__nav-link").click();
    await fixture.whenStable();
    expect(isMenuOpen()).toBe(false);
  });

  it("should close the menu after a route change", async () => {
    await openMenu();
    await TestBed.inject(Router).navigateByUrl("/");
    await fixture.whenStable();
    expect(isMenuOpen()).toBe(false);
  });

  it("should switch the language and mark the active button", async () => {
    const [german, english] = Array.from(
      element.querySelectorAll<HTMLButtonElement>(".header__language"),
    );
    expect(german.getAttribute("aria-pressed")).toBe("true");
    english.click();
    await fixture.whenStable();
    expect(TestBed.inject(LanguageService).currentLanguage()).toBe("en");
    expect(english.getAttribute("aria-pressed")).toBe("true");
    expect(query(".header__nav-link").textContent).toContain("About me");
  });
});
