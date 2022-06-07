import { Pipe, PipeTransform } from '@angular/core';
import { statusDisplayMap } from '../constants';
import { OrderStatus } from '../types';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(status: OrderStatus): string {
    return statusDisplayMap[status];
  }

}
