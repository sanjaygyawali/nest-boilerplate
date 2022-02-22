import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GeneratedcrudModule } from './modules/generatedcrud/generatedcrud.module';
import { GeneratedwebsocketModule } from './modules/generatedwebsocket/generatedwebsocket.module';
import appConfig from './config/app.config';
import mailConfig from './config/mail.config';
import fileConfig from './config/file.config';
import databaseConfig from './config/database.config';
import authConfig from './config/auth.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'src/database/typeorm-config.service';
import { AuthModule } from './modules/auth/auth.module';
import { RolesModule } from './modules/roles/roles.module';
import { contextMiddleware } from './middlewares/context.middelware';
import { GuestMiddleware } from './common/middleware/guest.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig, appConfig, mailConfig, fileConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    GeneratedcrudModule,
    GeneratedwebsocketModule,
    AuthModule,
    UsersModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(contextMiddleware).forRoutes('*');
  }
}
