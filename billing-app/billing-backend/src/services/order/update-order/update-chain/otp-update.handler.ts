import { BaseChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { OrderType } from 'src/types';
import { otpUpdateChainFactory } from './otp-chain';

export class UpdateOTPChainHandler extends BaseChainHandler<UpdateOrderDTO> {
  private otpUpdateChain = otpUpdateChainFactory();

  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.type === OrderType.OTP;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await this.otpUpdateChain.handle(context);
  }
}
