import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrderItem } from '../../orders/entities/order-item.entity';

@Entity('menu_items')
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  precio: number;

  @Column({ type: 'boolean', default: true })
  disponible: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imagen: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.menu)
  ordenes: OrderItem[];
}
