import { Component, computed, inject } from "@angular/core";

import { ContentService } from "../../core/services/content";
import { LegalDocumentView } from "../../shared/legal-document/legal-document";

/** Privacy policy (Datenschutzerklärung) page. */
@Component({
  imports: [LegalDocumentView],
  selector: "app-privacy-policy",
  styleUrl: "./privacy-policy.scss",
  templateUrl: "./privacy-policy.html",
})
export class PrivacyPolicy {
  private readonly contentService = inject(ContentService);

  protected readonly document = computed(() => this.contentService.content().privacyPolicy);
}
