import { Component } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CustomValidators } from '../../../../utils/validators';
import { BtnComponent } from '../../../components/btn/btn.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-recovery-form',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './recovery-form.component.html',
  styleUrl: './recovery-form.component.scss'
})
export class RecoveryFormComponent {
  form = this.formBuilder.nonNullable.group(
    {
      newPassword: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
      ],
    }
  );
  status: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  constructor(private formBuilder: FormBuilder) {}

  recovery() {
    if (this.form.valid) {
      // Todo
    } else {
      this.form.markAllAsTouched();
    }
  }
}
