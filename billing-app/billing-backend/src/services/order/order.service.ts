import { Injectable } from '@nestjs/common';
import { UpdateOrderDTO } from 'src/dto/request';
import { SuccessResponseDTO } from 'src/dto/response';
import { OrderStatus } from 'src/types';
import { emulateAsyncProccess } from 'src/utils';
import { HIGH_COST_BARRIER_USD } from './constants';

@Injectable()
export class OrderService {
  async update(order: UpdateOrderDTO): Promise<SuccessResponseDTO> {
    console.log(`${this.constructor.name}.update start`);
    if (order.status >= OrderStatus.Final) {
      await this.validateIfTheCustomerIsAllowedForOTP(order);
      await this.calculateUpToDateTaxAccordingToPrice(order);
    }
    if (
      (order.status === OrderStatus.Aprooved ||
        order.status === OrderStatus.Paid) &&
      order.totalCost >= HIGH_COST_BARRIER_USD
    ) {
      await this.executeHighCostOrderBL(order);
    }
    return {
      success: true,
    };
  }

  private async validateIfTheCustomerIsAllowedForOTP(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProccess(
      'validate if the customer is allowed for one-time payment',
      order,
    );
  }

  private async calculateUpToDateTaxAccordingToPrice(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProccess(
      'calculate up to date tax according to price',
      order,
    );
  }

  private async executeHighCostOrderBL(order: UpdateOrderDTO): Promise<void> {
    await emulateAsyncProccess('execute High cost order business logic', order);
  }
}
