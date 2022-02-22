import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { profile } from 'console';
import { AuthUser } from 'src/decorators/auth-user.decorator';
import { GuestUser } from 'src/decorators/guest-user.decorator';
import { Auth } from 'src/decorators/http.decorator';
import { UserProfile } from 'src/decorators/user-profile.decorator';
import { ContextProvider } from 'src/providers/context.provider';
import { User } from '../users/entity/user.entity';
import { AuthService } from './auth.service';
import { AuthEmailLoginDto } from './dtos/auth-email-login.dto';
import { AuthRegisterLoginDto } from './dtos/auth-register-login.dto';
import { GuestAuthGuard } from './guards/guest.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { LocalAuthGuard } from './guards/local.guard';

@ApiTags('Auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(public service: AuthService) {}

  @Post('/register')
  @HttpCode(HttpStatus.OK)
  public async register(@Body() createUserDto: AuthRegisterLoginDto) {
    return this.service.register(createUserDto);
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() loginDto: AuthEmailLoginDto) {
    return this.service.validateLogin(loginDto);
  }

  @Get('me')
  @Auth([], {})
  @HttpCode(HttpStatus.OK)
  public async me(@AuthUser() user: User, @UserProfile() profile) {
    return user;
  }

  @Get('test')
  @Auth([], { public: true })
  @HttpCode(HttpStatus.OK)
  public async testme(@AuthUser() user: User, @UserProfile() profile) {
    return user;
  }
}
