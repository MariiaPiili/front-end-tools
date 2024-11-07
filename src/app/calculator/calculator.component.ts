import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  title: string = 'Laskin';
  buttons: string[] = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    'C',
    '0',
    '+',
    '=',
  ];
  result: string = '';

  addValue(value: any) {
    console.log('addValue value: ' + value);
    if (value == '=') {
      //console.log('lausekkeen arvo on: ' + eval?.(this.result));
      try {
        this.result = eval?.(this.result);
      } catch (err) {
        this.result = 'ERROR';
      }
    } else if (value == 'C') {
      this.result = '';
    } else {
      this.result = this.result + value;
    }
  }
}
