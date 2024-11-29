import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { User } from '../models/user';

@Component({
    selector: 'app-reactive-form',
    standalone:true,
    imports: [
        ReactiveFormsModule,
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    templateUrl: './reactive-form.component.html',
    styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  title: string = 'Reactive form';

  registrationForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder) {
    this.user = new User();

    this.registrationForm = this.fb.group(
      {
        firstName: new FormControl(this.user.firstName, [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-Z]+$'),
        ]),
        lastName: new FormControl(this.user.lastName, [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-Z]+$'),
        ]),
        personId: new FormControl(this.user.personId, [
          Validators.required,
          Validators.pattern(
            '^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d\\+|\\d\\d[-U-Y]|[0-2]\\d[A-F])\\d{3}[\\dA-Z]$'
          ),
        ]),
        email: new FormControl(this.user.email, [
          Validators.required,
          Validators.email,
        ]),
        username: new FormControl(this.user.username, [
          Validators.required,
          Validators.minLength(6),
        ]),
        password: new FormControl(this.user.password, [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^(?=.*[A-Z])(?=.*\\d).+$'),
        ]),
        confirmPassword: new FormControl(
          this.user.confirmPassword,
          Validators.required
        ),
        termsAccepted: new FormControl(
          this.user.termsAccepted,
          Validators.requiredTrue
        ),
      },
      { validators: this.passwordMatchValidator }
    );
  }

  get firstName() {
    return this.registrationForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.registrationForm.get('lastName') as FormControl;
  }

  get personId() {
    return this.registrationForm.get('personId') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get username() {
    return this.registrationForm.get('username') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get termsAccepted() {
    return this.registrationForm.get('termsAccepted') as FormControl;
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.user = new User(this.registrationForm.value);
      console.log('Form Submitted', this.user);
    } else {
      console.log('Form is invalid');
    }
  }
}
