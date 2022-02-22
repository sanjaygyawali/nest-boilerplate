import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { GeneratedwebsocketService } from './generatedwebsocket.service';
import { CreateGeneratedwebsocketDto } from './dto/create-generatedwebsocket.dto';
import { UpdateGeneratedwebsocketDto } from './dto/update-generatedwebsocket.dto';

@WebSocketGateway()
export class GeneratedwebsocketGateway {
  constructor(private readonly generatedwebsocketService: GeneratedwebsocketService) {}

  @SubscribeMessage('createGeneratedwebsocket')
  create(@MessageBody() createGeneratedwebsocketDto: CreateGeneratedwebsocketDto) {
    return this.generatedwebsocketService.create(createGeneratedwebsocketDto);
  }

  @SubscribeMessage('findAllGeneratedwebsocket')
  findAll() {
    return this.generatedwebsocketService.findAll();
  }

  @SubscribeMessage('findOneGeneratedwebsocket')
  findOne(@MessageBody() id: number) {
    return this.generatedwebsocketService.findOne(id);
  }

  @SubscribeMessage('updateGeneratedwebsocket')
  update(@MessageBody() updateGeneratedwebsocketDto: UpdateGeneratedwebsocketDto) {
    return this.generatedwebsocketService.update(updateGeneratedwebsocketDto.id, updateGeneratedwebsocketDto);
  }

  @SubscribeMessage('removeGeneratedwebsocket')
  remove(@MessageBody() id: number) {
    return this.generatedwebsocketService.remove(id);
  }
}
