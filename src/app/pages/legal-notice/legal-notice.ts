import { Component, computed, inject } from "@angular/core";

import { ContentService } from "../../core/services/content";
import { LegalDocumentView } from "../../shared/legal-document/legal-document";

@Component({
  imports: [LegalDocumentView],
  selector: "app-legal-notice",
  styleUrl: "./legal-notice.scss",
  templateUrl: "./legal-notice.html",
})
export class LegalNotice {
  private readonly contentService = inject(ContentService);

  protected readonly document = computed(() => this.contentService.content().legalNotice);
}
