import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  if (!process.env.IS_TS_NODE) {
    await import('module-alias/register');
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3030);
}
bootstrap();
