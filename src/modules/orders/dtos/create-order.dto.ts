import { IsNotEmpty, IsArray } from 'class-validator';
import { CreateOrderItemDto } from './create-order-item.dto';

export class CreateOrderDto {
  @IsNotEmpty()
  nombre_cliente: string;

  @IsNotEmpty()
  numero_mesa: string;

  @IsArray()
  items: CreateOrderItemDto[];
}
