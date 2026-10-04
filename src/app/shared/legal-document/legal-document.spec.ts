import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LegalDocument } from "../../content/content.model";
import { LegalDocumentView } from "./legal-document";

const DOCUMENT: LegalDocument = {
  title: "Title",
  sections: [
    { heading: "First", paragraphs: ["One", "Two"] },
    { heading: "Second", paragraphs: ["Three"] },
  ],
};

describe("LegalDocumentView", () => {
  let fixture: ComponentFixture<LegalDocumentView>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [LegalDocumentView] }).compileComponents();
    fixture = TestBed.createComponent(LegalDocumentView);
    fixture.componentRef.setInput("document", DOCUMENT);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it("renders exactly one h1 with the title", () => {
    const headings = element.querySelectorAll("h1");
    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toBe("Title");
  });

  it("renders one h2 per section and one paragraph per text", () => {
    expect(element.querySelectorAll("h2").length).toBe(2);
    expect(element.querySelectorAll("p").length).toBe(3);
  });
});
