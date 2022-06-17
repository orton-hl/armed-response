import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let version = 1;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`armed-response/v${version}/api/`);
  await app.listen(3000);
}
bootstrap();