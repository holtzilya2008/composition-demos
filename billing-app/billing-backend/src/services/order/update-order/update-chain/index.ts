import { ChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { CustomerValidationHandler } from './customer-validation.handler';
import { UpdateOTPChainHandler } from './otp-update.handler';
import { SplittedUpdateHandler } from './splitted-update-handler';
import { SubscriptionUpdateHandler } from './subscription-update.handler';

const customerValidationHandler = new CustomerValidationHandler();
const otpUpdateHandler = new UpdateOTPChainHandler();
const subscriptionUpdateHandler = new SubscriptionUpdateHandler();
const splittedUpdateHandler = new SplittedUpdateHandler();

export function updateOrderChainFactory(): ChainHandler<UpdateOrderDTO> {
  const chain = customerValidationHandler;
  chain
    .setNext(otpUpdateHandler)
    .setNext(subscriptionUpdateHandler)
    .setNext(splittedUpdateHandler);
  return chain;
}
