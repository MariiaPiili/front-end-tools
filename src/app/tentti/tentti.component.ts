import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TenttiService } from '../tentti.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './tentti.component.html',
  styleUrls: ['./tentti.component.css'],
})
export class TenttiComponent {
  ticketForm: FormGroup;
  ticketTypes = [
    { type: 'basic', label: 'Peruslippu', price: 15, quantity: 0 },
    { type: 'student', label: 'Opiskelija', price: 10, quantity: 0 },
    { type: 'senior', label: 'Eläkeläinen', price: 8, quantity: 0 },
  ];

  submitted = false;

  constructor(private fb: FormBuilder, private tenttiService: TenttiService) {
    this.ticketForm = this.fb.group({
      isMember: [false],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  updateQuantity(ticket: any, change: number) {
    ticket.quantity += change;
    if (ticket.quantity < 0) ticket.quantity = 0;
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    const discount = this.ticketForm.get('isMember')?.value ? 0.15 : 0;
    this.ticketTypes.forEach((ticket) => {
      totalPrice += ticket.price * ticket.quantity * (1 - discount);
    });

    return parseFloat(totalPrice.toFixed(2));
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      const formData = this.ticketForm.value;
      const totalPrice = this.calculateTotalPrice();

      const order = {
        ...formData,
        tickets: this.ticketTypes.filter((ticket) => ticket.quantity > 0),
        totalPrice: totalPrice,
      };

      this.tenttiService.saveOrder(order);
      this.submitted = true;

      alert(`First name: ${formData.firstName}
        Last name: ${formData.lastName}
        Email: ${formData.email}
        Total price: ${totalPrice} €`);
    }
  }
}
