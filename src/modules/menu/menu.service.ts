import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuItem } from './entities/menu-item.entity';
import { CreateMenuItemDto } from './dtos/create-menu-item.dto';
import { UpdateMenuItemDto } from './dtos/update-menu-item.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuItem)
    private readonly menuRepository: Repository<MenuItem>,
  ) {}

  // Crear un nuevo plato
  create(createMenuItemDto: CreateMenuItemDto) {
    const menuItem = this.menuRepository.create(createMenuItemDto);
    return this.menuRepository.save(menuItem);
  }

  // Obtener todos los platos
  findAll() {
    return this.menuRepository.find();
  }

  // Obtener un plato por ID
  findOne(id: number) {
    return this.menuRepository.findOneBy({ id });
  }

  // Actualizar un plato
  update(id: number, updateMenuItemDto: UpdateMenuItemDto) {
    return this.menuRepository.update(id, updateMenuItemDto);
  }

  // Eliminar un plato
  remove(id: number) {
    return this.menuRepository.delete(id);
  }
}
