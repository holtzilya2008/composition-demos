import { ChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { OtpFinalHandler } from './otp-final.handler';
import { OtpHighCostHandler } from './otp-high-cost.handler';

const finalHandler = new OtpFinalHandler();
const highCostHandler = new OtpHighCostHandler();

export function otpUpdateChainFactory(): ChainHandler<UpdateOrderDTO> {
  const chain = finalHandler;
  chain.setNext(highCostHandler);
  return chain;
}
