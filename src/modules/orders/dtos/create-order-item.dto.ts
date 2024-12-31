import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @IsNotEmpty()
  @IsNumber()
  menu_id: number;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;

  @IsNotEmpty()
  @IsNumber()
  subtotal: number;
}
