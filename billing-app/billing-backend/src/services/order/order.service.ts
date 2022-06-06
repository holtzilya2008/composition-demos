import { Injectable } from '@nestjs/common';
import { UpdateOrderDTO } from 'src/dto/request';
import { SuccessResponseDTO } from 'src/dto/response';
import { OrderStatus, OrderType } from 'src/types';
import { emulateAsyncProccess } from 'src/utils';
import { HIGH_COST_BARRIER_USD } from './constants';

@Injectable()
export class OrderService {
  async update(order: UpdateOrderDTO): Promise<SuccessResponseDTO> {
    console.log(`${this.constructor.name}.update start`);
    switch (order.type) {
      case OrderType.OTP:
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
        break;
      case OrderType.Subscription:
        if (order.status >= OrderStatus.Final) {
          await this.validateIfTheProductIsAllowedForSubscription(order);
          await this.executeSomeSpeialValidationForSubscription(order);
        }
        if (order.status >= OrderStatus.Final) {
          await this.updateNextOrdersInSequence(order);
        }
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

  private async validateIfTheProductIsAllowedForSubscription(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProccess(
      'validate if the product is allowed for subscription',
      order,
    );
  }

  private async executeSomeSpeialValidationForSubscription(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProccess(
      'should preform special validation for subscription',
      order,
    );
  }

  private async updateNextOrdersInSequence(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProccess('should update next orders in sequence', order);
  }
}
