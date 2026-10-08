import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PageBackground } from "./page-background";

describe("PageBackground", () => {
  let fixture: ComponentFixture<PageBackground>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [PageBackground] }).compileComponents();
    fixture = TestBed.createComponent(PageBackground);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it("is hidden from assistive technology", () => {
    expect(element.querySelector(".page-background")?.getAttribute("aria-hidden")).toBe("true");
  });

  it("uses only decorative images without alt text", () => {
    const images = Array.from(element.querySelectorAll("img"));
    expect(images.length).toBeGreaterThan(0);
    expect(images.every((image) => image.getAttribute("alt") === "")).toBe(true);
  });

  it("references only existing shape files from the icon folder", () => {
    const sources = Array.from(element.querySelectorAll("img")).map((i) => i.getAttribute("src"));
    expect(sources.every((src) => src?.startsWith("graphics/bg/") && src.endsWith(".svg"))).toBe(
      true,
    );
  });
});
