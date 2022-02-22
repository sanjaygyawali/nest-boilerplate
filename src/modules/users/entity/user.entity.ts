import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, MinLength } from 'class-validator';
import { AuthProvidersEnum } from 'src/modules/auth/auth-providers.enum';
import { EntityHelper } from 'src/utils/entity-helper';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User extends EntityHelper {
  @ApiProperty({ example: 'test@mail.com' })
  @IsEmail()
  @Column({ unique: true, nullable: true })
  email: string;

  @ApiProperty()
  @MinLength(6)
  @Column({ nullable: true })
  password: string;

  @Column({ default: AuthProvidersEnum.email })
  provider: string;

  @Column({ nullable: true })
  socialId: string | null;

  @ApiProperty({ example: 'John' })
  @Column({ nullable: true })
  firstName: string | null;

  @ApiProperty({ example: 'Doe' })
  @Column({ nullable: true })
  lastName: string | null;

  @Column({ nullable: true })
  hash: string | null;

  @BeforeInsert()
  @BeforeUpdate()
  async setPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  }
}
