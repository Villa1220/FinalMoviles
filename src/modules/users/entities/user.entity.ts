import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 100, unique: true, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    default: 'cliente',
  })
  rol: 'admin' | 'cliente';

  @Column({ type: 'boolean', default: true })
  activo: boolean;

  @OneToMany(() => Order, (order) => order.cliente)
  pedidos: Order[];
}
