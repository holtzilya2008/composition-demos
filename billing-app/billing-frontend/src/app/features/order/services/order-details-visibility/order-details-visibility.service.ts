import { Injectable } from '@angular/core';
import { Rule } from 'src/app/core/rule-engine';
import { rulesFactory } from './rules';
import { OrderVisibilityContext } from './types';
import { allRuleEngine } from 'src/app/core/rule-engine';
import { OrderState } from '../../types';
import { DropdownService } from 'src/app/api/services/dropdown.service';
import { orderBy } from 'lodash';
import { Customer } from 'src/app/api/models';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsVisibilityService {
  private rules: Rule<OrderVisibilityContext, boolean>[] =
    rulesFactory.getRules();
  private engine = allRuleEngine;

  constructor(private readonly dropdownService: DropdownService) {}

  isFieldVisible(fieldName: string, state: OrderState) {
    const customer = this.getCustomer(state);
    const context: OrderVisibilityContext = {
      orderState: state,
      customerInfo: { taxRequired: customer?.taxRequired } ,
      fieldName,
    };
    const result = this.engine.aggregateAllBoolean(this.rules, context);
    return result;
  }

  private getCustomer(state: OrderState): Customer | null {
    if (!state || !state.order) {
      return null;
    }
    return this.dropdownService.getCustomerById(state.order.customerId);
  }
}
