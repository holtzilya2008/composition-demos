import { Body, Controller, Put } from '@nestjs/common';
import { UpdateOrderDTO } from 'src/dto/request';
import { SuccessResponseDTO } from 'src/dto/response';
import { OrderService } from 'src/services';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Put()
  async update(@Body() request: UpdateOrderDTO): Promise<SuccessResponseDTO> {
    return await this.orderService.update(request);
  }
}
