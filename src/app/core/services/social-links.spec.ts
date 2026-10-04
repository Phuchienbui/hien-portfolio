import { TestBed } from "@angular/core/testing";

import { SocialLinksService } from "./social-links";

describe("SocialLinksService", () => {
  let service: SocialLinksService;

  beforeEach(() => {
    service = TestBed.inject(SocialLinksService);
  });

  it("lists GitHub and e-mail but skips LinkedIn while its URL is unknown", () => {
    const icons = service.links().map((link) => link.icon);
    expect(icons).toEqual(["social-github", "social-email"]);
  });

  it("uses https for profiles and mailto for the e-mail address", () => {
    const hrefs = service.links().map((link) => link.href);
    expect(hrefs[0]).toMatch(/^https:\/\//);
    expect(hrefs[1]).toMatch(/^mailto:/);
  });

  it("opens only external profiles in a new tab", () => {
    expect(service.links().map((link) => link.isExternal)).toEqual([true, false]);
  });
});
