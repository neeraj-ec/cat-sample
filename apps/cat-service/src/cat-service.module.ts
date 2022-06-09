import { Module } from '@nestjs/common';
import { CatServiceController } from './cat-service.controller';
import { CatServiceService } from './cat-service.service';

@Module({
  imports: [],
  controllers: [CatServiceController],
  providers: [CatServiceService],
})
export class CatServiceModule {}
