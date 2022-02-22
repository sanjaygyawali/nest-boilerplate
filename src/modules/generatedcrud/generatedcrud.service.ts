import { Injectable } from '@nestjs/common';
import { CreateGeneratedcrudDto } from './dto/create-generatedcrud.dto';
import { UpdateGeneratedcrudDto } from './dto/update-generatedcrud.dto';

@Injectable()
export class GeneratedcrudService {
  create(createGeneratedcrudDto: CreateGeneratedcrudDto) {
    return 'This action adds a new generatedcrud';
  }

  findAll() {
    return `This action returns all generatedcrud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generatedcrud`;
  }

  update(id: number, updateGeneratedcrudDto: UpdateGeneratedcrudDto) {
    return `This action updates a #${id} generatedcrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} generatedcrud`;
  }
}
