import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { VendorModule } from 'src/app/common/vendor.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderStatusPipe } from './pipes/order-status.pipe';
import { TaxRequiredPipe } from './pipes/tax-required.pipe';

@NgModule({
  declarations: [
    OrderDetailsComponent,
    OrderFormComponent,
    OrderStatusPipe,
    TaxRequiredPipe
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
