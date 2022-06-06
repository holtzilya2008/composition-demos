import { BaseChainHandler } from 'src/core';
import { UpdateOrderDTO } from 'src/dto';
import { OrderType } from 'src/types';
import { getOtpUpdateChain } from './otp-chain';

export class UpdateOTPChainHandler extends BaseChainHandler<UpdateOrderDTO> {

  private otpUpdateChain = getOtpUpdateChain();

  protected isResponsible(context: UpdateOrderDTO): boolean {
    return context.type === OrderType.OTP;
  }

  protected async handleConcrete(context: UpdateOrderDTO): Promise<void> {
    await this.otpUpdateChain.handle(context);
  }


}
