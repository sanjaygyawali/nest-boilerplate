import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ProfileService } from 'src/modules/users/services/profile.service';
import { ContextProvider } from 'src/providers/context.provider';
import { v4 as uuid } from 'uuid';

@Injectable()
export class GuestMiddleware implements NestMiddleware {
  constructor(private profileService: ProfileService) {}
  async use(req: Request, res: Response, next: NextFunction) {
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
    next();
  }
}
