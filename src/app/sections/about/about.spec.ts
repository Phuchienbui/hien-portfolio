import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContentService } from "../../core/services/content";
import { About } from "./about";

describe("About", () => {
  let fixture: ComponentFixture<About>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [About] }).compileComponents();
    fixture = TestBed.createComponent(About);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("is the scroll target #about with an h2 title", () => {
    expect(element.querySelector("section#about h2")).toBeTruthy();
  });

  it("renders one list item per point", () => {
    const points = TestBed.inject(ContentService).content().about.points;
    expect(element.querySelectorAll(".about__point").length).toBe(points.length);
  });

  it("shows a placeholder instead of a photo while none is delivered", () => {
    expect(element.querySelector(".about__photo")).toBeNull();
    expect(element.querySelector(".about__photo-placeholder")).toBeTruthy();
  });
});
