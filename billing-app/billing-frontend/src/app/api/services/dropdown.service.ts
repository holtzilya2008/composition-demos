import { Injectable } from '@angular/core';
import { CustomersMock } from '../mocks/customers-mock';
import { ProductsMock } from '../mocks/products-mock';
import { Customer, Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }

  getCustomers(): Customer[] {
    return [...CustomersMock];
  }

  getCustomerById(id: string): Customer | null {
    return this.getCustomers().find(c => c.id === id) ?? null;
  }

  getProducts(): Product[] {
    return [...ProductsMock];
  }
}
