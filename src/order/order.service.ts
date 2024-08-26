import { Injectable } from '@nestjs/common';
import { AbstractService } from '../common/abstract.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { PaginatedResult } from '../common/paginated-result.interface';

@Injectable()
export class OrderService extends AbstractService {
  constructor(
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>
  ) {
    super(orderRepository);
  }

  async paginate(page = 1, relations = []): Promise<PaginatedResult> {
    const {data, meta} = await super.paginate(page, relations);

    return {
      data: data.map((order: Order) => ({
        id: order.id,
        name: order.name,
        email: order.email,
        total: order.total,
        order_items: order.order_items,
        created_at: order.created_at,
      })),
      meta
    }
  }

}
