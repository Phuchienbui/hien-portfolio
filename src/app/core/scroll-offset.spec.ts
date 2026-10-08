import { ViewportScroller } from "@angular/common";
import { TestBed } from "@angular/core/testing";

import { provideScrollOffset } from "./scroll-offset";

const MOBILE_HEADER_HEIGHT = 109;
const SECTION_TOP = 500;

function createBox(tag: string, className: string, top: number, height: number): HTMLElement {
  const element = document.createElement(tag);
  element.className = className;
  element.getBoundingClientRect = (): DOMRect => ({ top, height, left: 0 }) as DOMRect;
  document.body.append(element);
  return element;
}

describe("provideScrollOffset", () => {
  let scrollTo: ReturnType<typeof vi.spyOn>;
  let header: HTMLElement;
  let section: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideScrollOffset()] });
    scrollTo = vi.spyOn(window, "scrollTo").mockImplementation(() => undefined);
    header = createBox("header", "header", 0, MOBILE_HEADER_HEIGHT);
    section = createBox("section", "section", SECTION_TOP, 800);
    section.id = "about";
  });

  afterEach(() => {
    header.remove();
    section.remove();
    scrollTo.mockRestore();
  });

  it("stops anchor scrolling below the fixed header", () => {
    TestBed.inject(ViewportScroller).scrollToAnchor("about");
    expect(scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ top: SECTION_TOP - MOBILE_HEADER_HEIGHT }),
    );
  });

  it("follows the current header height instead of a fixed value", () => {
    const desktopHeaderHeight = 80;
    header.getBoundingClientRect = (): DOMRect => ({ height: desktopHeaderHeight }) as DOMRect;
    TestBed.inject(ViewportScroller).scrollToAnchor("about");
    expect(scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ top: SECTION_TOP - desktopHeaderHeight }),
    );
  });
});
