import { OrderStatus, OrderType, PaymentMethod } from "../enums";

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
