import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";

import { ContentService } from "../../core/services/content";
import { Hero } from "./hero";

describe("Hero", () => {
  let fixture: ComponentFixture<Hero>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("renders the owner name as the only h1", () => {
    const headings = element.querySelectorAll("h1");
    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toContain(TestBed.inject(ContentService).content().site.name);
  });

  it("links GitHub and e-mail but skips LinkedIn without a URL", () => {
    const hrefs = Array.from(element.querySelectorAll<HTMLAnchorElement>(".hero__social-link")).map(
      (link) => link.getAttribute("href"),
    );
    expect(hrefs.length).toBe(2);
    expect(hrefs[0]).toMatch(/^https:\/\//);
    expect(hrefs[1]).toMatch(/^mailto:/);
  });

  it("opens external links safely", () => {
    const github = element.querySelector<HTMLAnchorElement>(".hero__social-link");
    expect(github?.getAttribute("rel")).toBe("noopener noreferrer");
  });
});
