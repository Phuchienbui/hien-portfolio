import { DOCUMENT, UpperCasePipe } from "@angular/common";
import { Component, computed, effect, inject, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { NavigationEnd, Router, RouterLink } from "@angular/router";
import { filter } from "rxjs";

import { ContentService } from "../../core/services/content";
import { LanguageService } from "../../core/services/language";
import { Language, LANGUAGES } from "../../models/language";

/** Viewport width from which the menu is shown inline instead of as overlay (matches `lg`). */
const DESKTOP_MIN_WIDTH_PX = 1024;

/** Fixed site header with logo, section navigation and language switch. */
@Component({
  imports: [RouterLink, UpperCasePipe],
  selector: "app-header",
  host: {
    "(document:keydown.escape)": "closeMenu()",
    "(window:resize)": "closeMenuOnDesktop()",
  },
  styleUrl: "./header.scss",
  templateUrl: "./header.html",
})
export class Header {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly contentService = inject(ContentService);
  private readonly languageService = inject(LanguageService);

  protected readonly site = computed(() => this.contentService.content().site);
  protected readonly text = computed(() => this.contentService.content().header);
  protected readonly languages = LANGUAGES;
  protected readonly activeLanguage = this.languageService.currentLanguage;
  protected readonly isMenuOpen = signal(false);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.closeMenu());
    effect(() => this.setPageScrollLocked(this.isMenuOpen()));
  }

  /** Opens the mobile menu if it is closed and closes it otherwise. */
  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  /** Closes the mobile menu. */
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  /** Resets the menu state when the viewport grows into the desktop layout. */
  protected closeMenuOnDesktop(): void {
    const viewportWidth = this.document.defaultView?.innerWidth ?? 0;
    if (viewportWidth >= DESKTOP_MIN_WIDTH_PX) {
      this.closeMenu();
    }
  }

  /** Switches the site language. */
  protected selectLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  /** Prevents the page behind the open overlay from scrolling. */
  private setPageScrollLocked(isLocked: boolean): void {
    this.document.body.style.overflow = isLocked ? "hidden" : "";
  }
}
