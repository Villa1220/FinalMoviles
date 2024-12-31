import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { MenuItem } from '../../menu/entities/menu-item.entity';

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.items, { nullable: false, onDelete: 'CASCADE' })
  pedido: Order;

  @ManyToOne(() => MenuItem, (menuItem) => menuItem.ordenes, { nullable: false, onDelete: 'CASCADE' })
  menu: MenuItem;

  @Column({ type: 'int', nullable: false })
  cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  subtotal: number;
}
