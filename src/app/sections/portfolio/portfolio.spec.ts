import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PROJECTS } from "../../data/projects";
import { Portfolio } from "./portfolio";

describe("Portfolio", () => {
  let fixture: ComponentFixture<Portfolio>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Portfolio] }).compileComponents();
    fixture = TestBed.createComponent(Portfolio);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("is the scroll target #portfolio with an h2 and one h3 per project", () => {
    expect(element.querySelector("section#portfolio h2")).toBeTruthy();
    expect(element.querySelectorAll("h3").length).toBe(PROJECTS.length);
  });

  it("renders a card for every confirmed project", () => {
    expect(element.querySelectorAll("app-project-card").length).toBe(PROJECTS.length);
  });

  it("never renders an empty link target", () => {
    const hrefs = Array.from(element.querySelectorAll("a")).map((a) => a.getAttribute("href"));
    expect(hrefs.every((href) => !!href)).toBe(true);
  });
});
