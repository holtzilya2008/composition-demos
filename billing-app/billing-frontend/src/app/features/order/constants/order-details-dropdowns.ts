import { toNumber } from "lodash";
import { OrderType, PaymentMethod } from "../types";
import { statusDisplayMap } from "./status-display-map";

export const OrderDetailsDropdowns =  {
  types: Object.values(OrderType),
  statuses: Object.keys(statusDisplayMap).map(toNumber),
  paymentMethods: Object.values(PaymentMethod)
}
