import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SkillItem } from "./skill-item";

describe("SkillItem", () => {
  let fixture: ComponentFixture<SkillItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SkillItem] }).compileComponents();
    fixture = TestBed.createComponent(SkillItem);
    fixture.componentRef.setInput("icon", "skill-html");
    fixture.componentRef.setInput("label", "HTML");
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("shows the label and a decorative icon", () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector("figcaption")?.textContent).toBe("HTML");
    expect(element.querySelector("img")?.getAttribute("src")).toBe("graphics/skill-html.svg");
    expect(element.querySelector("img")?.getAttribute("alt")).toBe("");
  });
});
