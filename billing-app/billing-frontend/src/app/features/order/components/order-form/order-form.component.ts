import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { DropdownService } from 'src/app/api/services/dropdown.service';
import { OrderDetailsDropdowns } from '../../constants';
import { OrderStateService } from '../../services/order-state/order-state.service';
import { OrderState } from '../../types';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
  providers: [OrderStateService]
})
export class OrderFormComponent implements OnInit, OnDestroy {

  private orderId = 'f21cd945-0c1f-41f5-bb0b-e742a0e91abb';
  private cleanup$ = new Subject<boolean>();
  orderForm!: FormGroup;
  orderState$!: Observable<OrderState>;
  dropdowns: any = { ...OrderDetailsDropdowns };

  constructor(private readonly fb: FormBuilder,
              private readonly dropdownService: DropdownService,
              private readonly stateService: OrderStateService) { }

  ngOnInit(): void {
    this.orderState$ = this.stateService.initState(this.orderId);
    this.initForm();
    this.dropdowns.customers = this.dropdownService.getCustomers();
    this.dropdowns.products = this.dropdownService.getProducts();
  }

  private initForm(): void {
    this.orderState$.pipe(take(1)).subscribe((state) => {
      const initialOrder = state.order;
      this.orderForm = this.fb.group({
        productId: [initialOrder.productId],
        type: [initialOrder.type],
        totalCost: [0],
        monthlyAmount: [0],
        status: [initialOrder.monthlyAmount],
        customerId: [initialOrder.customerId],
        tax: [0],
        paymentMethod: ['']
      });
      this.subscribeToFormChanges();
    });
  }

  private subscribeToFormChanges(): void {
    this.orderForm.valueChanges.pipe(
      takeUntil(this.cleanup$)
    ).subscribe(order => {
      this.stateService.patchState(order);
    });
  }

  ngOnDestroy(): void {
    this.cleanup$.next(true);
    this.cleanup$.unsubscribe();
  }
}
