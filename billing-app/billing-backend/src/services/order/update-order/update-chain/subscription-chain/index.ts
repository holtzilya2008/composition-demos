import { ChainHandler } from "src/core";
import { UpdateOrderDTO } from "src/dto";
import { SubscriptionAproovedHandler } from "./subscription-aprooved.handler";
import { SubscriptionFinalHandler } from "./subscription-final.handler";

const finalHandler = new SubscriptionFinalHandler();
const aproovedHandler = new SubscriptionAproovedHandler();

export function getSubscriptionUpdateChain(): ChainHandler<UpdateOrderDTO> {
  const chain = finalHandler;
  chain.setNext(aproovedHandler);
  return chain;
}