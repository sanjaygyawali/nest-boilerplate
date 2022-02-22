import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UsersController } from './users.controller';
import { ProfileService } from './services/profile.service';
import { Profile } from './entity/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Profile]),
  ],
  providers: [UsersService, ProfileService],
  // controllers: [UsersController],
  exports: [UsersService, ProfileService],
})
export class UsersModule {}
