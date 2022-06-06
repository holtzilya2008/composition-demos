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
    if (order.status >= OrderStatus.Final) {
      await this.validateCustomer(order);
    }
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
        if (order.status >= OrderStatus.Aprooved) {
          await this.updateNextOrdersInSequence(order);
        }
        break;
      case OrderType.Splitted:
        if (order.status >= OrderStatus.Final) {
          await this.checkIfProductPriceIsAllowedForSplit(order);
          await this.checkIfCustomerAllowdTheSpecifiedNumberOfPayments(order);
          await this.calculateUpToDateTaxAccordingToPrice(order);
        }
        if (order.status >= OrderStatus.Aprooved) {
          if (order.totalCost >= HIGH_COST_BARRIER_USD) {
            await this.executeHighCostOrderBL(order);
          }
          await this.updateNextOrdersInSequence(order);
        }
        break;
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

  private async checkIfProductPriceIsAllowedForSplit(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProccess(
      'Check if product price is allowed for split',
      order,
    );
  }

  private async checkIfCustomerAllowdTheSpecifiedNumberOfPayments(
    order: UpdateOrderDTO,
  ): Promise<void> {
    await emulateAsyncProccess(
      'Check if customer allowd the specified number of payments',
      order,
    );
  }

  private async validateCustomer(order: UpdateOrderDTO): Promise<void> {
    await emulateAsyncProccess('Validate customer', order);
  }
}
