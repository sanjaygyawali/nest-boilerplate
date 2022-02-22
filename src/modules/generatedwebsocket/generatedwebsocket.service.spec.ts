import { Test, TestingModule } from '@nestjs/testing';
import { GeneratedwebsocketService } from './generatedwebsocket.service';

describe('GeneratedwebsocketService', () => {
  let service: GeneratedwebsocketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneratedwebsocketService],
    }).compile();

    service = module.get<GeneratedwebsocketService>(GeneratedwebsocketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
