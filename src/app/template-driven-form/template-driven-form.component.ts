import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  title: string = 'Template driven form';

  user = {
    firstName: '',
    lastName: '',
    personId: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted', this.user);
    }
  }
}
