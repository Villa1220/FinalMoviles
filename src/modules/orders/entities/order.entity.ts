import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
  } from 'typeorm';
  import { User } from '../../users/entities/user.entity';
  import { OrderItem } from './order-item.entity';
  
  @Entity('orders')
  export class Order {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, (user) => user.pedidos, { nullable: true, onDelete: 'SET NULL' })
    cliente: User;
  
    @Column({ type: 'varchar', length: 100, nullable: false })
    nombre_cliente: string;
  
    @Column({ type: 'varchar', length: 10, nullable: false })
    numero_mesa: string;
  
    @Column({
      type: 'varchar',
      length: 20,
      nullable: false,
      default: 'en espera',
    })
    estado: 'en espera' | 'en preparación' | 'listo';
  
    @CreateDateColumn({ type: 'timestamp' })
    fecha: Date;
  
    @OneToMany(() => OrderItem, (orderItem) => orderItem.pedido)
    items: OrderItem[];
  }
  