import { OrderStatus, OrderType, PaymentMethod } from "../types";

export const OrderDetailsDropdowns =  {
  types: Object.values(OrderType),
  statuses: Object.values(OrderStatus),
  paymentMethods: Object.values(PaymentMethod)
}
