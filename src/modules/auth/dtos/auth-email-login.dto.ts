import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, Validate } from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';

export class AuthEmailLoginDto {
  @ApiProperty({ example: 'test@mail.com' })
  @Transform(({ value }) => {
    return value.toLowerCase().trim();
  })
  @Validate(IsExist, ['User'], {
    message: 'emailNotExists',
  })
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
