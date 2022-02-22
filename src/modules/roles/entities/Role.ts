import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Role {
  @ApiProperty()
  @PrimaryColumn()
  id: number;

  @ApiProperty({ example: 'Admin' })
  @Column()
  name: string;
}
