import { Customer } from "src/app/api/models";
import { OrderState } from "../../../types/order-state";

export interface OrderVisibilityContext {
  orderState: OrderState;
  customerInfo?: Pick<Customer, 'taxRequired'>;
  fieldName: string;
}
