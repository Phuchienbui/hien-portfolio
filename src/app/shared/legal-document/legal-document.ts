import { Component, input } from "@angular/core";

import { LegalDocument } from "../../content/content.model";

/** Layout of a legal text: one `h1`, sections with `h2` and paragraphs. */
@Component({
  selector: "app-legal-document",
  styleUrl: "./legal-document.scss",
  templateUrl: "./legal-document.html",
})
export class LegalDocumentView {
  readonly document = input.required<LegalDocument>();
}
