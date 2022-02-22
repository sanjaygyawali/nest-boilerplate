import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

export class AuthRegisterLoginDto {
  @ApiProperty({ example: 'test@mail.com' })
  @Validate(IsNotExist, ['User'], {
    message: 'emailAlreadyExists',
  })
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @MinLength(10)
  password: string;

  @ApiProperty({ example: '' })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: '' })
  @IsNotEmpty()
  lastName: string;
}
