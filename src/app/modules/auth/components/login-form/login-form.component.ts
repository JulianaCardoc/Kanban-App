import { Component } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../../../components/btn/btn.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: string = 'init';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      // TODO
    } else {
      this.form.markAllAsTouched();
    }
  }
}
