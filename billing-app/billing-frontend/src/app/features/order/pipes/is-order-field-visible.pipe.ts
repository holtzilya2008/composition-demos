import { Pipe, PipeTransform } from '@angular/core';
import { OrderDetailsVisibilityService } from '../services/order-details-visibility';
import { OrderState } from '../types';

@Pipe({
  name: 'isOrderFieldVisible'
})
export class IsOrderFieldVisiblePipe implements PipeTransform {


  constructor(private readonly visibilityService: OrderDetailsVisibilityService) {

  }

  transform(fieldName: string, state: OrderState): boolean {
    return this.visibilityService.isFieldVisible(fieldName, state);
  }

}
