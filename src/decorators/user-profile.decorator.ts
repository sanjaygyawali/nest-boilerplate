import {
  createParamDecorator,
  ExecutionContext,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ContextProvider } from 'src/providers/context.provider';
import { v1 as uuid } from 'uuid';

export const UserProfile = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    let profile = ContextProvider.getProfile();
    return profile;
  },
);
