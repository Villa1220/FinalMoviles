import { IsNotEmpty } from 'class-validator';

export class UpdateOrderStatusDto {
  @IsNotEmpty()
  estado: 'en espera' | 'en preparación' | 'listo';
}
