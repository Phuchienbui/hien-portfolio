import { Component, computed, inject, input, signal } from "@angular/core";

import { ContentService } from "../../core/services/content";
import { TESTIMONIALS } from "../../data/testimonials";
import { Testimonial as TestimonialEntry } from "../../models/testimonial";

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
  protected readonly hasMultiple = computed(() => this.testimonials().length > 1);

  next(): void {
    this.currentIndex.update((index) => (index + 1) % this.testimonials().length);
  }

  previous(): void {
    const count = this.testimonials().length;
    this.currentIndex.update((index) => (index - 1 + count) % count);
  }

  goTo(index: number): void {
    if (index >= 0 && index < this.testimonials().length) {
      this.currentIndex.set(index);
    }
  }

  protected dotLabel(index: number): string {
    return this.text().goToLabel.replace("{n}", String(index + 1));
  }
}
