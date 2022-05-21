import { Rule } from "src/app/core/rule-engine";
import { OrderType } from "../../../types";
import { OrderVisibilityContext } from "../types";
import { flatten, uniq } from 'lodash';

const visibleFieldsByTypeMap = {
  [OrderType.Splitted]: ['monthlyAmount'],
  [OrderType.Subscription]: ['monthlyAmount'],
  [OrderType.OTP]: [] as string[]
}

export class VisibleByTypeRule implements Rule<OrderVisibilityContext, boolean> {

  private applicableForFields: string[] = uniq(
    flatten(Object.values(visibleFieldsByTypeMap))
  );

  isApplicable(context: OrderVisibilityContext): boolean {
    return this.applicableForFields.includes(context.fieldName);
  }

  execute(context: OrderVisibilityContext): boolean {
    const type = context.orderState.order.type;
    return visibleFieldsByTypeMap[type] && visibleFieldsByTypeMap[type].includes(context.fieldName);
  }

}


