import { OrderStatus, OrderType } from 'src/types';

export interface UpdateOrderDTO {
  id: string;
  productId: string;
  type: OrderType;
  totalCost?: number;
  monthlyAmount?: number;
  status: OrderStatus;
  customerId: string;
  tax?: number;
}
