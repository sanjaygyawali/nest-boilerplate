import { IAuthGuard, Type } from '@nestjs/passport';
import { AuthGuard as NestAuthGuard } from '@nestjs/passport';
import { AuthOptions } from '../types/auth-options.types';

export function AuthGuard(options?: Partial<AuthOptions>): Type<IAuthGuard> {
  const strategies = ['jwt'];
  if (options?.public) {
    strategies.push('anonymous');
  }
  return NestAuthGuard(strategies);
}
