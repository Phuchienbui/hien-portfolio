import { Component, computed, inject, input, signal } from "@angular/core";

import { ContentService } from "../../core/services/content";
import { TESTIMONIALS } from "../../data/testimonials";
import { Testimonial as TestimonialEntry } from "../../models/testimonial";

/** Testimonial carousel: one quote at a time, controlled by arrows and dots (no auto-play). */
@Component({
  selector: "app-testimonial",
  styleUrl: "./testimonial.scss",
  templateUrl: "./testimonial.html",
})
export class Testimonial {
  private readonly contentService = inject(ContentService);

  readonly testimonials = input<TestimonialEntry[]>(TESTIMONIALS);

  protected readonly text = computed(() => this.contentService.content().testimonial);
  readonly currentIndex = signal(0);
  protected readonly current = computed(
    () => this.testimonials()[this.currentIndex()] ?? this.testimonials()[0],
  );
  /** Arrows and dots only make sense with at least two testimonials. */
  protected readonly hasMultiple = computed(() => this.testimonials().length > 1);

  /** Shows the next testimonial and wraps around after the last one. */
  next(): void {
    this.currentIndex.update((index) => (index + 1) % this.testimonials().length);
  }

  /** Shows the previous testimonial and wraps around before the first one. */
  previous(): void {
    const count = this.testimonials().length;
    this.currentIndex.update((index) => (index - 1 + count) % count);
  }

  /** Shows the testimonial at the given position; ignores positions outside the list. */
  goTo(index: number): void {
    if (index >= 0 && index < this.testimonials().length) {
      this.currentIndex.set(index);
    }
  }

  /** Accessible label of the dot for the given position. */
  protected dotLabel(index: number): string {
    return this.text().goToLabel.replace("{n}", String(index + 1));
  }
}
