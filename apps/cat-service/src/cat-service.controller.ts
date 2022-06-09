import { Controller, Get } from '@nestjs/common';
import { CatServiceService } from './cat-service.service';

@Controller()
export class CatServiceController {
  constructor(private readonly catServiceService: CatServiceService) {}

  @Get()
  getHello(): string {
    return this.catServiceService.getHello();
  }
}
