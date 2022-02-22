import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user?.[Symbol.for('isPublic')]) {
      return;
    }
    return user;
  },
);
