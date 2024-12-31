import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule, // Importa el módulo de configuración
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST', 'localhost'), // Valor por defecto
        port: configService.get<number>('DATABASE_PORT', 5432), // Valor por defecto
        username: configService.get<string>('DATABASE_USER', 'postgres'), // Valor por defecto
        password: configService.get<string>('DATABASE_PASSWORD', 'admin123'), // Valor por defecto
        database: configService.get<string>('DATABASE_NAME', 'pedidos'), // Valor por defecto
        autoLoadEntities: true, // Carga automática de entidades
        synchronize: true, // Solo para desarrollo; desactivar en producción
      }),
    }),
  ],
})
export class DatabaseModule {}
