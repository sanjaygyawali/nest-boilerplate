import { Module } from '@nestjs/common';
import { GeneratedwebsocketService } from './generatedwebsocket.service';
import { GeneratedwebsocketGateway } from './generatedwebsocket.gateway';

@Module({
  providers: [GeneratedwebsocketGateway, GeneratedwebsocketService],
})
export class GeneratedwebsocketModule {}
