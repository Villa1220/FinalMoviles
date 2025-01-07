import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MenuService } from './menu.service';
import { CreateMenuItemDto } from './dtos/create-menu-item.dto';
import { UpdateMenuItemDto } from './dtos/update-menu-item.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express'; // Agregado

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  // Crear un nuevo plato
  @Post()
  @UseInterceptors(
    FileInterceptor('imagen', {
      storage: diskStorage({
        destination: './uploads/menu', // Carpeta para guardar imágenes
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  create(
    @Body() createMenuItemDto: CreateMenuItemDto,
    @UploadedFile() file: Express.Multer.File, // Cambiado
  ) {
    if (file) {
      createMenuItemDto.imagen = file.filename;
    }
    return this.menuService.create(createMenuItemDto);
  }

  // Obtener todos los platos
  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  // Obtener un plato por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  // Actualizar un plato
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMenuItemDto: UpdateMenuItemDto,
  ) {
    return this.menuService.update(+id, updateMenuItemDto);
  }

  // Eliminar un plato
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
