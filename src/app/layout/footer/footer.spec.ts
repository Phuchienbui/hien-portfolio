import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";

import { Footer } from "./footer";

describe("Footer", () => {
  let fixture: ComponentFixture<Footer>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(Footer);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it("is a footer landmark", () => {
    expect(element.querySelector("footer")).toBeTruthy();
  });

  it("shows the owner name with the current year", () => {
    const copyright = element.querySelector(".footer__copyright")?.textContent ?? "";
    expect(copyright).toContain("Phuc Hien Bui");
    expect(copyright).toContain(String(new Date().getFullYear()));
  });

  it("links the legal notice and the privacy policy", () => {
    const hrefs = Array.from(
      element.querySelectorAll<HTMLAnchorElement>(".footer__legal-link"),
    ).map((link) => link.getAttribute("href"));
    expect(hrefs).toEqual(["/legal-notice", "/privacy-policy"]);
  });

  it("opens social profiles safely in a new tab", () => {
    const github = element.querySelector<HTMLAnchorElement>(".footer__social-link");
    expect(github?.getAttribute("target")).toBe("_blank");
    expect(github?.getAttribute("rel")).toBe("noopener noreferrer");
  });
});
