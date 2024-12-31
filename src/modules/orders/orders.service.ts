import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderDto } from './dtos/create-order.dto';
import { UpdateOrderStatusDto } from './dtos/update-order-status.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private readonly orderItemsRepository: Repository<OrderItem>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { items, ...orderData } = createOrderDto;
    const order = this.ordersRepository.create(orderData);
    const savedOrder = await this.ordersRepository.save(order);

    const orderItems = items.map((item) => ({
      ...item,
      pedido: savedOrder,
    }));
    await this.orderItemsRepository.save(orderItems);

    return savedOrder;
  }

  findAll() {
    return this.ordersRepository.find({ relations: ['items', 'items.menu'] });
  }

  findOne(id: number) {
    return this.ordersRepository.findOne({
      where: { id },
      relations: ['items', 'items.menu'],
    });
  }

  async updateStatus(id: number, updateOrderStatusDto: UpdateOrderStatusDto) {
    await this.ordersRepository.update(id, updateOrderStatusDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const order = await this.findOne(id);
    return this.ordersRepository.remove(order);
  }
}
