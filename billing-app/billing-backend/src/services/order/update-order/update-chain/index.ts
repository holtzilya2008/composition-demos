import { ChainHandler } from "src/core";
import { UpdateOrderDTO } from "src/dto";
import { UpdateOTPChainHandler } from "./otp-update.handler";

const otpUpdateHandler = new UpdateOTPChainHandler();

export function getUpdateOrderChain(): ChainHandler<UpdateOrderDTO> {
  const chain = otpUpdateHandler;
  return chain;
}