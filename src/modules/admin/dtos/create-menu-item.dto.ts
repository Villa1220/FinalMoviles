import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateMenuItemDto {
  @IsNotEmpty()
  nombre: string;

  @IsOptional()
  descripcion?: string;

  @IsNotEmpty()
  @IsNumber()
  precio: number;

  @IsOptional()
  disponible?: boolean;

  @IsOptional()
  imagen?: string;
}
