import { HttpClient } from "@angular/common/http";
import { Service, inject, isDevMode } from "@angular/core";
import { Observable, delay, of, throwError } from "rxjs";

import { ContactMessage } from "../../models/contact-message";
import { CONTACT_ENDPOINT, CONTACT_MOCK_DELAY_MS } from "../config";

@Service()
export class ContactService {
  private readonly http = inject(HttpClient);

  send(message: ContactMessage): Observable<void> {
    if (CONTACT_ENDPOINT) {
      return this.http.post<void>(CONTACT_ENDPOINT, message);
    }
    if (isDevMode()) {
      return of(undefined).pipe(delay(CONTACT_MOCK_DELAY_MS));
    }
    return throwError(() => new Error("Contact endpoint is not configured."));
  }
}
