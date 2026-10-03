import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { Observable, Subject, of, throwError } from "rxjs";

import { ContactService } from "../../core/services/contact";
import { ContactMessage } from "../../models/contact-message";
import { Contact } from "./contact";

const VALID_VALUES = {
  name: "Max",
  email: "max@example.com",
  message: "Hello, this is a message.",
  privacyAccepted: true,
};

describe("Contact", () => {
  let fixture: ComponentFixture<Contact>;
  let component: Contact;
  let element: HTMLElement;
  let send: ReturnType<typeof vi.fn<(message: ContactMessage) => Observable<void>>>;

  /** Types a value into the control with the given form control name. */
  async function fill(values: Record<string, unknown>): Promise<void> {
    (component as unknown as { form: { patchValue(v: unknown): void } }).form.patchValue(values);
    await fixture.whenStable();
  }

  /** Marks the control as touched, as leaving the field would do. */
  async function blur(controlName: string): Promise<void> {
    const input = element.querySelector<HTMLElement>(`[formControlName="${controlName}"]`);
    input?.dispatchEvent(new Event("blur"));
    await fixture.whenStable();
  }

  /** The submit button of the form. */
  function submitButton(): HTMLButtonElement {
    return element.querySelector<HTMLButtonElement>(".contact__submit") as HTMLButtonElement;
  }

  beforeEach(async () => {
    send = vi.fn<(message: ContactMessage) => Observable<void>>(() => of(undefined));
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideRouter([]), { provide: ContactService, useValue: { send } }],
    }).compileComponents();
    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it("is the scroll target #contact with an h2", () => {
    expect(element.querySelector("section#contact h2")).toBeTruthy();
  });

  it("keeps the submit button disabled while the form is invalid", () => {
    expect(submitButton().disabled).toBe(true);
  });

  it("enables the submit button as soon as the form is valid, without leaving a field", async () => {
    await fill(VALID_VALUES);
    expect(submitButton().disabled).toBe(false);
  });

  it("keeps the button disabled without the privacy consent", async () => {
    await fill({ ...VALID_VALUES, privacyAccepted: false });
    expect(submitButton().disabled).toBe(true);
  });

  it("shows a validation message only after the field was left", async () => {
    await fill({ name: "M" });
    expect(element.querySelector("#contact-name-error")?.textContent?.trim()).toBe("");
    await blur("name");
    expect(element.querySelector("#contact-name-error")?.textContent?.trim()).not.toBe("");
  });

  it("always renders the message container so the layout cannot shift", () => {
    expect(element.querySelectorAll(".contact__error").length).toBe(4);
  });

  it("rejects an e-mail address without a domain dot", async () => {
    await fill({ ...VALID_VALUES, email: "max@example" });
    expect(submitButton().disabled).toBe(true);
  });

  it("sends the message, resets the form and announces the success", async () => {
    await fill(VALID_VALUES);
    submitButton().click();
    await fixture.whenStable();
    expect(send).toHaveBeenCalledWith({
      name: "Max",
      email: "max@example.com",
      message: "Hello, this is a message.",
    });
    expect(element.querySelector('[role="status"]')).toBeTruthy();
    expect(submitButton().disabled).toBe(true);
  });

  it("announces an error when sending fails and keeps the entered data", async () => {
    send.mockReturnValue(throwError(() => new Error("failed")));
    await fill(VALID_VALUES);
    submitButton().click();
    await fixture.whenStable();
    expect(element.querySelector('[role="alert"]')).toBeTruthy();
    expect(submitButton().disabled).toBe(false);
  });

  it("disables the button while the message is being sent", async () => {
    send.mockReturnValue(new Subject<void>());
    await fill(VALID_VALUES);
    submitButton().click();
    await fixture.whenStable();
    expect(submitButton().disabled).toBe(true);
  });

  it("does not send when the honeypot is filled but still looks successful", async () => {
    await fill({ ...VALID_VALUES, website: "http://spam.example" });
    submitButton().click();
    await fixture.whenStable();
    expect(send).not.toHaveBeenCalled();
    expect(element.querySelector('[role="status"]')).toBeTruthy();
  });
});
