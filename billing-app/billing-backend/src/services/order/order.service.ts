import { Injectable } from '@nestjs/common';
import { UpdateOrderDTO } from 'src/dto/request';

@Injectable()
export class OrderService {
  update(order: UpdateOrderDTO): void {
    console.log(`${this.constructor.name}.update start, id = ${order.id}`);

    console.log(`${this.constructor.name}.update end  id = ${order.id}`);
  }
}
