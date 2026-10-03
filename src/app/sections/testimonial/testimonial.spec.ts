import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Testimonial as TestimonialEntry } from "../../models/testimonial";
import { Testimonial } from "./testimonial";

/** Builds a testimonial with a predictable name for the given number. */
function entry(number: number): TestimonialEntry {
  return {
    id: `t${number}`,
    quote: `Quote ${number}`,
    name: `Name ${number}`,
    role: "Role",
    photo: "",
  };
}

describe("Testimonial", () => {
  let fixture: ComponentFixture<Testimonial>;
  let component: Testimonial;
  let element: HTMLElement;

  /** Renders the section with the given number of testimonials. */
  async function render(count: number): Promise<void> {
    fixture = TestBed.createComponent(Testimonial);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    const entries = Array.from({ length: count }, (_, index) => entry(index + 1));
    fixture.componentRef.setInput("testimonials", entries);
    await fixture.whenStable();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Testimonial] }).compileComponents();
  });

  it("renders nothing while there are no testimonials", async () => {
    await render(0);
    expect(element.querySelector("section")).toBeNull();
  });

  it("hides arrows and dots with a single testimonial", async () => {
    await render(1);
    expect(element.querySelector("section")).toBeTruthy();
    expect(element.querySelector(".testimonial__controls")).toBeNull();
  });

  it("shows arrows and one dot per testimonial from two entries on", async () => {
    await render(3);
    expect(element.querySelectorAll(".testimonial__arrow").length).toBe(2);
    expect(element.querySelectorAll(".testimonial__dot").length).toBe(3);
  });

  it("wraps around when moving forward past the last testimonial", async () => {
    await render(3);
    component.goTo(2);
    component.next();
    expect(component.currentIndex()).toBe(0);
  });

  it("wraps around when moving backward before the first testimonial", async () => {
    await render(3);
    component.previous();
    expect(component.currentIndex()).toBe(2);
  });

  it("jumps to a position and ignores positions outside the list", async () => {
    await render(3);
    component.goTo(1);
    component.goTo(7);
    component.goTo(-1);
    expect(component.currentIndex()).toBe(1);
  });

  it("announces the quote politely and shows the active testimonial", async () => {
    await render(2);
    component.next();
    await fixture.whenStable();
    const quote = element.querySelector("blockquote");
    expect(quote?.getAttribute("aria-live")).toBe("polite");
    expect(quote?.textContent).toContain("Quote 2");
  });
});
