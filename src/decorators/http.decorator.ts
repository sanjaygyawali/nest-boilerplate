import {
  applyDecorators,
  SetMetadata,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthUserIntercepor } from 'src/interceptors/auth-user-interceptor.service';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { GuestAuthGuard } from 'src/modules/auth/guards/guest.guard';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt.guard';
import { AuthOptions } from 'src/modules/auth/types/auth-options.types';

export function Auth(roles: unknown = [], options?: Partial<AuthOptions>) {
  const isPublicRoute = options?.public;
  let guards = [JwtAuthGuard];
  if (isPublicRoute) {
    guards.push(GuestAuthGuard);
  }

  return applyDecorators(
    SetMetadata('roles', roles),
    SetMetadata('options', options),
    UseGuards(...guards),
    ApiBearerAuth(),
    UseInterceptors(AuthUserIntercepor),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}
