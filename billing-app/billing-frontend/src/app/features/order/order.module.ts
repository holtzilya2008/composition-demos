import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { IsOrderFieldVisiblePipe } from './pipes/is-order-field-visible.pipe';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { VendorModule } from 'src/app/common/vendor.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderStatusPipe } from './pipes/order-status.pipe';

@NgModule({
  declarations: [
    OrderDetailsComponent,
    IsOrderFieldVisiblePipe,
    OrderFormComponent,
    OrderStatusPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VendorModule
  ],
  exports: [
    OrderDetailsComponent
  ]
})
export class OrderModule { }
