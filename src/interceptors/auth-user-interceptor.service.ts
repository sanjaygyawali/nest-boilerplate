import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AuthOptions } from 'src/modules/auth/types/auth-options.types';
import { User } from 'src/modules/users/entity/user.entity';
import { ProfileService } from 'src/modules/users/services/profile.service';
import { UsersService } from 'src/modules/users/users.service';
import { ContextProvider } from 'src/providers/context.provider';

@Injectable()
export class AuthUserIntercepor implements NestInterceptor {
  constructor(
    private reflector: Reflector,
    private userService: UsersService,
    private profileService: ProfileService,
  ) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const user = <User>req.user;
    ContextProvider.setAuthUser(user);
    if (user) {
      let profile = await this.profileService.findOneEntity({
        where: {
          userId: user.id,
        },
      });
      ContextProvider.setProfile(profile);
    } else {
      const options = this.reflector.get<AuthOptions>(
        'options',
        context.getHandler(),
      );
      if (options.public) {
        if (req.headers.sessionid && !req.headers.authorization) {
          res.set('sessionid', req.headers.sessionid);
        }
        let sessionid;
        if (!req.headers.sessionid && !req.headers.authorization) {
          let profile = await this.profileService.saveEntity({
            isGuest: true,
          });
          sessionid = profile.id;
          res.set('sessionid', sessionid);
          req['sessionid'] = sessionid;
        }

        let profile = await this.profileService.findOneEntity({
          where: {
            id: req.sessionid,
          },
        });
        ContextProvider.setProfile(profile);
      }
    }
    return next.handle();
  }
}
