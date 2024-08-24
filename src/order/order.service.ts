import { Injectable } from '@nestjs/common';
import { AbstractService } from '../common/abstract.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService extends AbstractService {
  constructor(
    @InjectRepository(Order) private readonly orderRepository: Repository<Order>
  ) {
    super(orderRepository);
  }

}
