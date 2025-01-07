import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'; // Cambiado
import { join } from 'path'; // Agregado

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // Cambiado

  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:8081', // URL del frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Servir archivos estáticos
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
