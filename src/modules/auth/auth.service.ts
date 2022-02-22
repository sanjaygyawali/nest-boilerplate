import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthRegisterLoginDto } from './dtos/auth-register-login.dto';
import * as crypto from 'crypto';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { UsersService } from '../users/users.service';
import { RoleEnum } from '../roles/enum/role.enum';
import { StatusEnum } from '../users/enum/status.enum';
import { User } from '../users/entity/user.entity';
import { AuthEmailLoginDto } from './dtos/auth-email-login.dto';
import { AuthProvidersEnum } from './auth-providers.enum';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async validateLogin(loginDto: AuthEmailLoginDto) {
    const user = await this.usersService.findOneEntity({
      where: {
        email: loginDto.email,
      },
    });
    if (user.provider != AuthProvidersEnum.email) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: `login not possible`,
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const isValidPassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (isValidPassword) {
      const token = await this.jwtService.sign({
        id: user.id,
      });
      return { token, user: user };
    } else {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            passord: 'incorrectPassword',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }

  async register(dto: AuthRegisterLoginDto) {
    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');

    const user = await this.usersService.saveEntity({
      ...dto,
      email: dto.email,
      // role: {
      //   id: RoleEnum.admin,
      // },
      // status: {
      //   id: StatusEnum.active,
      // },
      hash,
    });
    // on user register send email.
  }

  async me(user: User): Promise<User> {
    return await this.usersService.findOneEntity({
      where: {
        id: user.id,
      },
    });
  }
}
