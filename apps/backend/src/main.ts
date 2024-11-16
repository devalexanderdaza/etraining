import fmp from '@fastify/multipart';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as dayjs from 'dayjs';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
import helmet from 'helmet';
import { AppModule } from './app.module';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Bogota');

async function bootstrap() {
  const fastifyAdapter = new FastifyAdapter({
    logger: false,
  });

  fastifyAdapter.register(fmp, {
    limits: {
      fieldNameSize: 1000,
      fieldSize: 100,
      fields: 10,
      fileSize: 200 * 1024 * 1024, // 200 MB
      files: 1,
      headerPairs: 200,
    },
  });

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter);

  app.use(
    helmet({
      contentSecurityPolicy: process.env.NODE_ENV === 'production' ? true : false,
    })
  );

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors();

  await app.listen(5000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()} 🚀`);
  console.log(`Timezone: ${dayjs.tz.guess()}`);
}

bootstrap();
