import { Test, TestingModule } from '@nestjs/testing';
import { GeneratedwebsocketGateway } from './generatedwebsocket.gateway';
import { GeneratedwebsocketService } from './generatedwebsocket.service';

describe('GeneratedwebsocketGateway', () => {
  let gateway: GeneratedwebsocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneratedwebsocketGateway, GeneratedwebsocketService],
    }).compile();

    gateway = module.get<GeneratedwebsocketGateway>(GeneratedwebsocketGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
