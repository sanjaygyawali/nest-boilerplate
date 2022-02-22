import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneratedwebsocketDto } from './create-generatedwebsocket.dto';

export class UpdateGeneratedwebsocketDto extends PartialType(CreateGeneratedwebsocketDto) {
  id: number;
}
