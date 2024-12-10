import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TenttiService {
  private order: any;

  saveOrder(order: any) {
    this.order = order;
    console.log('Order saved:', this.order);
  }

  getOrder() {
    return this.order;
  }
}
