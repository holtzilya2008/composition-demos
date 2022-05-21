import { Rule } from "src/app/core/rule-engine";
import { OrderVisibilityContext } from "../types";

export class VisibleByTaxInfoRule implements Rule<OrderVisibilityContext, boolean> {

  private applicableForFields: string[] = ['tax'];

  isApplicable(context: OrderVisibilityContext): boolean {
    return this.applicableForFields.includes(context.fieldName);
  }

  execute(context: OrderVisibilityContext): boolean {
    return !!context.customerInfo?.taxRequired;
  }

}


