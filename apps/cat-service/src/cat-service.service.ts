import { Injectable } from '@nestjs/common';

@Injectable()
export class CatServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
