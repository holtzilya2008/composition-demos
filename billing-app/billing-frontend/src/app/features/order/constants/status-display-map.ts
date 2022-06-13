import { OrderStatus } from "../../../api/enums";

export const statusDisplayMap = {
  [OrderStatus.Draft]: 'Draft',
  [OrderStatus.Final]: 'Final',
  [OrderStatus.Approved]: 'Approved',
  [OrderStatus.Paid]: 'Paid',
  [OrderStatus.Delivered]: 'Delivered'
}
