import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OrdersService } from './orders.service';
import { Inject, forwardRef } from '@nestjs/common'; 

@WebSocketGateway({ cors: true })
export class OrdersGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    @Inject(forwardRef(() => OrdersService)) 
    private readonly ordersService: OrdersService,
  ) {}

  notifyOrderStatusChange(orderId: number, estado: string) {
    this.server.emit('orderStatusChanged', { orderId, estado });
  }
}
