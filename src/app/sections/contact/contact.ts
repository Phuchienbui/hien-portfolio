import { toSignal } from "@angular/core/rxjs-interop";
import { Component, computed, inject, signal } from "@angular/core";
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";

import { ContactService } from "../../core/services/contact";
import { ContentService } from "../../core/services/content";

const NAME_MIN_LENGTH = 2;
const MESSAGE_MIN_LENGTH = 10;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmitState = "idle" | "sending" | "success" | "error";

type ValidatedField = "name" | "email" | "message" | "privacyAccepted";

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
    website: [""],
  });
  readonly submitState = signal<SubmitState>("idle");

  private readonly formStatus = toSignal(this.form.statusChanges, {
    initialValue: this.form.status,
  });
  protected readonly canSubmit = computed(
    () => this.formStatus() === "VALID" && this.submitState() !== "sending",
  );

  protected showError(field: ValidatedField): boolean {
    const control = this.form.controls[field];
    return control.touched && control.invalid;
  }

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

  private sendMessage(): void {
    const { name, email, message } = this.form.getRawValue();
    this.submitState.set("sending");
    this.contactService.send({ name, email, message }).subscribe({
      next: () => this.finishSuccessfully(),
      error: () => this.submitState.set("error"),
    });
  }

  private finishSuccessfully(): void {
    this.form.reset();
    this.submitState.set("success");
  }
}
