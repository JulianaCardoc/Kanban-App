import { Component } from '@angular/core';
import { BtnComponent } from '../../../components/btn/btn.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss'
})
export class ForgotPasswordFormComponent {
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });
  status: string = 'init';
  emailSent = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email } = this.form.getRawValue();
      // TODO: Connect
    } else {
      this.form.markAllAsTouched();
    }
  }
}
