import { Component } from "@angular/core";

/**
 * Decorative blurred color areas behind the whole page (purple, green, cyan), taken from the
 * "Background and Photo" frame of the design. Purely visual, hidden from assistive technology.
 */
@Component({
  selector: "app-page-background",
  styleUrl: "./page-background.scss",
  templateUrl: "./page-background.html",
})
export class PageBackground {}
