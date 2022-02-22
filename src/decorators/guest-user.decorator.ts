import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

export const GuestUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
      return uuid();
    }
  },
);
