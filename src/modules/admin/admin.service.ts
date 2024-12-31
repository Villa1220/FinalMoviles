import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { MenuItem } from '../menu/entities/menu-item.entity';
import { Order } from '../orders/entities/order.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreateMenuItemDto } from './dtos/create-menu-item.dto';
import { UpdateMenuItemDto } from './dtos/update-menu-item.dto';
import { UpdateOrderStatusDto } from './dtos/update-order-status.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(MenuItem)
    private readonly menuRepository: Repository<MenuItem>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  // CRUD de usuarios
  createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  findAllUsers() {
    return this.userRepository.find();
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }

  // CRUD del menú
  createMenuItem(createMenuItemDto: CreateMenuItemDto) {
    const menuItem = this.menuRepository.create(createMenuItemDto);
    return this.menuRepository.save(menuItem);
  }

  findAllMenuItems() {
    return this.menuRepository.find();
  }

  updateMenuItem(id: number, updateMenuItemDto: UpdateMenuItemDto) {
    return this.menuRepository.update(id, updateMenuItemDto);
  }

  deleteMenuItem(id: number) {
    return this.menuRepository.delete(id);
  }

  // Gestión de pedidos
  findAllOrders() {
    return this.orderRepository.find({ relations: ['items'] });
  }

  updateOrderStatus(id: number, updateOrderStatusDto: UpdateOrderStatusDto) {
    return this.orderRepository.update(id, updateOrderStatusDto);
  }

  deleteOrder(id: number) {
    return this.orderRepository.delete(id);
  }
}
