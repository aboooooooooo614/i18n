import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-i18n-form',
  templateUrl: './i18n-form.component.html',
  styleUrls: ['./i18n-form.component.css'],
})
export class I18nFormComponent implements OnInit {
  i18nForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onClear(): void {
    this.i18nForm.reset();
  }

  onSubmit(): void {
    console.log(this.i18nForm.getRawValue());
  }
}
