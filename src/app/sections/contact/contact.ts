import { toSignal } from "@angular/core/rxjs-interop";
import { Component, computed, inject, signal } from "@angular/core";
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";

import { ContactService } from "../../core/services/contact";
import { ContentService } from "../../core/services/content";

const NAME_MIN_LENGTH = 2;
const MESSAGE_MIN_LENGTH = 10;
/** Stricter than `Validators.email`: requires a dot in the domain part. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Progress of sending the form. */
type SubmitState = "idle" | "sending" | "success" | "error";

/** Fields that show a validation message. */
type ValidatedField = "name" | "email" | "message" | "privacyAccepted";

/** Contact section with the message form and the back-to-top button. */
@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: "app-contact",
  styleUrl: "./contact.scss",
  templateUrl: "./contact.html",
})
export class Contact {
  private readonly contactService = inject(ContactService);
  private readonly contentService = inject(ContentService);
  private readonly formBuilder = inject(NonNullableFormBuilder);

  protected readonly text = computed(() => this.contentService.content().contact);
  protected readonly form = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(NAME_MIN_LENGTH)]],
    email: ["", [Validators.required, Validators.pattern(EMAIL_PATTERN)]],
    message: ["", [Validators.required, Validators.minLength(MESSAGE_MIN_LENGTH)]],
    privacyAccepted: [false, Validators.requiredTrue],
    /** Honeypot: real visitors never see or fill it. */
    website: [""],
  });
  readonly submitState = signal<SubmitState>("idle");

  /** Form status as a signal, so the button reacts to every keystroke, not only to blur. */
  private readonly formStatus = toSignal(this.form.statusChanges, {
    initialValue: this.form.status,
  });
  protected readonly canSubmit = computed(
    () => this.formStatus() === "VALID" && this.submitState() !== "sending",
  );

  /** A validation message is shown only after the field was left (touched) and is invalid. */
  protected showError(field: ValidatedField): boolean {
    const control = this.form.controls[field];
    return control.touched && control.invalid;
  }

  /** Sends the message. A filled honeypot is treated as spam and silently "succeeds". */
  protected submit(): void {
    if (!this.canSubmit()) {
      return;
    }
    if (this.form.getRawValue().website) {
      this.finishSuccessfully();
      return;
    }
    this.sendMessage();
  }

  /** Hands the entered data to the service and tracks the result. */
  private sendMessage(): void {
    const { name, email, message } = this.form.getRawValue();
    this.submitState.set("sending");
    this.contactService.send({ name, email, message }).subscribe({
      next: () => this.finishSuccessfully(),
      error: () => this.submitState.set("error"),
    });
  }

  /** Clears the form and shows the success message. */
  private finishSuccessfully(): void {
    this.form.reset();
    this.submitState.set("success");
  }
}
