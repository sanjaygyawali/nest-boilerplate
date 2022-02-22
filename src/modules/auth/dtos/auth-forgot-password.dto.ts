import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail } from 'class-validator';

export class AuthForgotPasswordDto {
  @ApiProperty()
  //   @Transform((value: string) => value.toLowerCase().trim())
  @IsEmail()
  email: string;
}
