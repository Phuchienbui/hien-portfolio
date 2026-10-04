import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CONTENT_DE } from "../../content/content.de";
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

  it("shows the delivered portrait with alt text and fixed dimensions", () => {
    const photo = element.querySelector<HTMLImageElement>(".about__photo");
    expect(photo?.getAttribute("alt")).toBeTruthy();
    expect(photo?.getAttribute("width")).toBe("480");
    expect(photo?.getAttribute("height")).toBe("640");
    expect(element.querySelector(".about__photo-placeholder")).toBeNull();
  });

  it("falls back to a visible placeholder while no photo path is set", async () => {
    TestBed.resetTestingModule();
    const content = { ...CONTENT_DE, site: { ...CONTENT_DE.site, aboutPhotoSrc: "" } };
    await TestBed.configureTestingModule({
      imports: [About],
      providers: [
        { provide: ContentService, useValue: { content: (): typeof content => content } },
      ],
    }).compileComponents();
    const emptyFixture = TestBed.createComponent(About);
    await emptyFixture.whenStable();
    const root: HTMLElement = emptyFixture.nativeElement;
    expect(root.querySelector(".about__photo")).toBeNull();
    expect(root.querySelector(".about__photo-placeholder")).toBeTruthy();
  });
});
