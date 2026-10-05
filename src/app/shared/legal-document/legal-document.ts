import { Component, input } from "@angular/core";

import { LegalDocument } from "../../content/content.model";

@Component({
  selector: "app-legal-document",
  styleUrl: "./legal-document.scss",
  templateUrl: "./legal-document.html",
})
export class LegalDocumentView {
  readonly document = input.required<LegalDocument>();
}
