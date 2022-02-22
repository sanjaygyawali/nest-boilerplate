import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeneratedcrudService } from './generatedcrud.service';
import { CreateGeneratedcrudDto } from './dto/create-generatedcrud.dto';
import { UpdateGeneratedcrudDto } from './dto/update-generatedcrud.dto';

@Controller('generatedcrud')
export class GeneratedcrudController {
  constructor(private readonly generatedcrudService: GeneratedcrudService) {}

  @Post()
  create(@Body() createGeneratedcrudDto: CreateGeneratedcrudDto) {
    return this.generatedcrudService.create(createGeneratedcrudDto);
  }

  @Get()
  findAll() {
    return this.generatedcrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generatedcrudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneratedcrudDto: UpdateGeneratedcrudDto) {
    return this.generatedcrudService.update(+id, updateGeneratedcrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generatedcrudService.remove(+id);
  }
}
