import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";

import { SKILLS } from "../../data/skills";
import { Skills } from "./skills";

describe("Skills", () => {
  let fixture: ComponentFixture<Skills>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(Skills);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("is the scroll target #skills with an h2 and an h3", () => {
    expect(element.querySelector("section#skills h2")).toBeTruthy();
    expect(element.querySelector("h3")).toBeTruthy();
  });

  it("renders one item per confirmed skill", () => {
    expect(element.querySelectorAll("app-skill-item").length).toBe(SKILLS.length);
  });

  it("links the call to action to the contact section", () => {
    expect(element.querySelector(".skills__button")?.getAttribute("href")).toContain("#contact");
  });
});
