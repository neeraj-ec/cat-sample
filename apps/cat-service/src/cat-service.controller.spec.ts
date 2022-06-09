import { Test, TestingModule } from '@nestjs/testing';
import { CatServiceController } from './cat-service.controller';
import { CatServiceService } from './cat-service.service';

describe('CatServiceController', () => {
  let catServiceController: CatServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatServiceController],
      providers: [CatServiceService],
    }).compile();

    catServiceController = app.get<CatServiceController>(CatServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(catServiceController.getHello()).toBe('Hello World!');
    });
  });
});
