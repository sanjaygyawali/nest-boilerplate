import { Test, TestingModule } from '@nestjs/testing';
import { GeneratedcrudController } from './generatedcrud.controller';
import { GeneratedcrudService } from './generatedcrud.service';

describe('GeneratedcrudController', () => {
  let controller: GeneratedcrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneratedcrudController],
      providers: [GeneratedcrudService],
    }).compile();

    controller = module.get<GeneratedcrudController>(GeneratedcrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
