import { Injectable } from '@nestjs/common';
import { CreateGeneratedwebsocketDto } from './dto/create-generatedwebsocket.dto';
import { UpdateGeneratedwebsocketDto } from './dto/update-generatedwebsocket.dto';

@Injectable()
export class GeneratedwebsocketService {
  create(createGeneratedwebsocketDto: CreateGeneratedwebsocketDto) {
    return 'This action adds a new generatedwebsocket';
  }

  findAll() {
    return `This action returns all generatedwebsocket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generatedwebsocket`;
  }

  update(id: number, updateGeneratedwebsocketDto: UpdateGeneratedwebsocketDto) {
    return `This action updates a #${id} generatedwebsocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} generatedwebsocket`;
  }
}
