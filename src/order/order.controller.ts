import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller()
export class OrderController {
  constructor(private orderService: OrderService) {
  }

  @Get('orders')  
  async all(@Query('page') page = 1) {
    return this.orderService.paginate(page, ['order_items'])
  }

}
