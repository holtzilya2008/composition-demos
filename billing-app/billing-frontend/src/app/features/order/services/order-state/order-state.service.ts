import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { OrdersMock } from '../../mocks/order-mocks';
import { Order, OrderState } from '../../types';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class OrderStateService {

  private orderState!: BehaviorSubject<OrderState>;
  private isInitialized: boolean = false;

  constructor() { }

  initState(id: string): Observable<OrderState> {
    return this.getOrderFromApi(id).pipe(
      tap((order) => {
        this.orderState = new BehaviorSubject({order});
        this.isInitialized = true;
      }),
      switchMap(() => this.orderState.asObservable())
    )
  }

  getState(): Observable<OrderState> {
    if (!this.isInitialized) {
      throw new Error(`Order state is not initialized!`);
    }
    return this.orderState.asObservable();
  }

  patchState(order: Partial<Order>): void {
    if (!this.isInitialized) {
      throw new Error(`Order state is not initialized!`);
    }
    const currentState = this.orderState.value;
    this.orderState.next({
      order: {...(currentState.order), ...order}
    });
  }

  private getOrderFromApi(id: string): Observable<Order> {
    const mock = OrdersMock;
    const order = mock.find(o => o.id === id) as Order;
    return timer(200).pipe(
      map(() => order)
    );
  }

}
