import { Order, OrderStatus, OrderType } from "../types";

export const OrdersMock: Order[] = [
  {
    id: "f21cd945-0c1f-41f5-bb0b-e742a0e91abb",
    productId: "1c5beaa6-1461-426a-b601-93118dbd9d2f",
    customerId: "5d6fa5bc-5fe2-4e91-80b3-52e693809366",
    status: OrderStatus.Draft,
    type: OrderType.OTP,
  }
]
