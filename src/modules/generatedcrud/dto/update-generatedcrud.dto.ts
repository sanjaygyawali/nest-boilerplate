import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneratedcrudDto } from './create-generatedcrud.dto';

export class UpdateGeneratedcrudDto extends PartialType(CreateGeneratedcrudDto) {}
