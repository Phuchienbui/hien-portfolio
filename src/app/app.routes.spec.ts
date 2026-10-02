import { TestBed } from "@angular/core/testing";
import { provideRouter, Router } from "@angular/router";
import { RouterTestingHarness } from "@angular/router/testing";

import { ROUTES } from "./app.routes";

describe("ROUTES", () => {
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(ROUTES)] });
    harness = await RouterTestingHarness.create();
  });

  it.each([
    ["/", "Phuc Hien Bui"],
    ["/legal-notice", "Legal notice"],
    ["/privacy-policy", "Privacy policy"],
  ])("should render exactly one h1 for %s", async (url, heading) => {
    await harness.navigateByUrl(url);
    const headings = (harness.routeNativeElement as HTMLElement).querySelectorAll("h1");
    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toBe(heading);
  });

  it("should redirect unknown paths to home", async () => {
    await harness.navigateByUrl("/does-not-exist");
    expect(TestBed.inject(Router).url).toBe("/");
  });
});
