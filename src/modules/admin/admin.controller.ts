import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreateMenuItemDto } from './dtos/create-menu-item.dto';
import { UpdateMenuItemDto } from './dtos/update-menu-item.dto';
import { UpdateOrderStatusDto } from './dtos/update-order-status.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // CRUD de usuarios
  @Post('users')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.adminService.createUser(createUserDto);
  }

  @Get('users')
  findAllUsers() {
    return this.adminService.findAllUsers();
  }

  @Put('users/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.adminService.updateUser(+id, updateUserDto);
  }

  @Delete('users/:id')
  deleteUser(@Param('id') id: string) {
    return this.adminService.deleteUser(+id);
  }

  // CRUD del menú
  @Post('menu')
  createMenuItem(@Body() createMenuItemDto: CreateMenuItemDto) {
    return this.adminService.createMenuItem(createMenuItemDto);
  }

  @Get('menu')
  findAllMenuItems() {
    return this.adminService.findAllMenuItems();
  }

  @Put('menu/:id')
  updateMenuItem(
    @Param('id') id: string,
    @Body() updateMenuItemDto: UpdateMenuItemDto,
  ) {
    return this.adminService.updateMenuItem(+id, updateMenuItemDto);
  }

  @Delete('menu/:id')
  deleteMenuItem(@Param('id') id: string) {
    return this.adminService.deleteMenuItem(+id);
  }

  // Gestión de pedidos
  @Get('orders')
  findAllOrders() {
    return this.adminService.findAllOrders();
  }

  @Put('orders/:id/status')
  updateOrderStatus(
    @Param('id') id: string,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    return this.adminService.updateOrderStatus(+id, updateOrderStatusDto);
  }

  @Delete('orders/:id')
  deleteOrder(@Param('id') id: string) {
    return this.adminService.deleteOrder(+id);
  }
}
