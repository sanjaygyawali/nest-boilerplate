import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/modules/users/entity/user.entity';
import { UsersService } from 'src/modules/users/users.service';

type JwtPayload = Pick<User, 'id'> & { iat: number; exp: number };

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private userService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('auth.secret'),
    });
  }
  public async validate(payload: JwtPayload): Promise<User> {
    if (!payload.id) {
      throw new UnauthorizedException();
    }
    const user = await this.userService.findOneEntity({
      where: {
        id: payload.id,
      },
    });
    return user;
  }
}
