import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import userResponseSerializer from 'src/modules/users/user-response.serializer';
import { User } from 'src/modules/users/entity/user.entity';
import deepMapObject from './deep-map-object';

@Injectable()
export class SerializerInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<unknown>> {
    return next.handle().pipe(
      map((data) => {
        return deepMapObject(data, (value) => {
          if (value.__entity === 'User') {
            userResponseSerializer(value as User);
          }
          return value;
        });
      }),
    );
  }
}
