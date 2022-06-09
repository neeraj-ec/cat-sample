import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CatServiceModule } from './cat-service.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CatServiceModule,
    {
      transport: Transport.TCP,
      options: {
        port: Number(process.env.PORT) || 40745,
      },
    },
  );
  await app.listen();

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
