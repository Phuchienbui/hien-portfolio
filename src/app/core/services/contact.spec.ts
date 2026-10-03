import { provideHttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { firstValueFrom } from "rxjs";

import { ContactService } from "./contact";

describe("ContactService", () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(ContactService);
  });

  it("answers with a mock success in development mode while no endpoint is configured", async () => {
    const message = { name: "Test", email: "test@example.com", message: "Hello there, friend." };
    await expect(firstValueFrom(service.send(message))).resolves.toBeUndefined();
  });
});
