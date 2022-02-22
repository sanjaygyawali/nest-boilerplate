import { Module } from '@nestjs/common';
import { GeneratedcrudService } from './generatedcrud.service';
import { GeneratedcrudController } from './generatedcrud.controller';

@Module({
  controllers: [GeneratedcrudController],
  providers: [GeneratedcrudService]
})
export class GeneratedcrudModule {}
