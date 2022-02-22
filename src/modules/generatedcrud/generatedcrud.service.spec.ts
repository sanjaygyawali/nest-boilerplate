import { Test, TestingModule } from '@nestjs/testing';
import { GeneratedcrudService } from './generatedcrud.service';

describe('GeneratedcrudService', () => {
  let service: GeneratedcrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneratedcrudService],
    }).compile();

    service = module.get<GeneratedcrudService>(GeneratedcrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
