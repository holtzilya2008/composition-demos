import { OrderStatus } from "./enums/order-status.enum";
import { OrderType } from "./enums/order-type.enum"
import { PaymentMethod } from "./enums/payment-method.enum";

export interface Order {
  id: string;
  productId: string;
  type: OrderType;
  totalCost?: number;
  monthlyAmount?: number;
  status: OrderStatus;
  customerId: string;
  tax?: number;
  paymentMethod?: PaymentMethod;
}

export type OrderField = keyof Order | 'textSummary';
