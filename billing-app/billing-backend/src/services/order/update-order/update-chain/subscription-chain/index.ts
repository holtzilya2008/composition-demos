import { ChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { SubscriptionApprovedHandler } from './subscription-approved.handler';
import { SubscriptionFinalHandler } from './subscription-final.handler';

const finalHandler = new SubscriptionFinalHandler();
const approvedHandler = new SubscriptionApprovedHandler();

export function subscriptionUpdateChainFactory(): ChainHandler<UpdateOrderDTO> {
  const chain = finalHandler;
  chain.setNext(approvedHandler);
  return chain;
}
