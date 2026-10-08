import { DOCUMENT, ViewportScroller } from "@angular/common";
import { EnvironmentProviders, inject, provideAppInitializer } from "@angular/core";

const HEADER_SELECTOR = ".header";

function getHeaderHeight(document: Document): number {
  return document.querySelector(HEADER_SELECTOR)?.getBoundingClientRect().height ?? 0;
}

export function provideScrollOffset(): EnvironmentProviders {
  return provideAppInitializer((): void => {
    const document = inject(DOCUMENT);
    inject(ViewportScroller).setOffset((): [number, number] => [0, getHeaderHeight(document)]);
  });
}
