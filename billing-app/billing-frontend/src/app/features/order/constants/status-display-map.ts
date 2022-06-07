import { OrderStatus } from "../../../api/enums";

export const statusDisplayMap = {
  [OrderStatus.Draft]: 'Draft',
  [OrderStatus.Final]: 'Final',
  [OrderStatus.Aprooved]: 'Aprooved',
  [OrderStatus.Paid]: 'Paid',
  [OrderStatus.Delivered]: 'Delivered'
}
