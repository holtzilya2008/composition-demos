import { ChainHandler } from "src/core";
import { UpdateOrderDTO } from "src/dto";
import { UpdateOTPChainHandler } from "./otp-update.handler";
import { SubscriptionUpdateHandler } from "./subscription-update.handler";

const otpUpdateHandler = new UpdateOTPChainHandler();
const subscriptionUpdateHandler = new SubscriptionUpdateHandler();

export function getUpdateOrderChain(): ChainHandler<UpdateOrderDTO> {
  const chain = otpUpdateHandler;
  chain.setNext(subscriptionUpdateHandler);
  return chain;
}