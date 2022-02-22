import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import validationOptions from './utils/validation-options';
import { SerializerInterceptor } from './utils/serializer.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  app.setGlobalPrefix(configService.get('app.apiPrefix'), {
    exclude: ['/'],
  });
  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.enableCors({
    exposedHeaders: 'sessionId',
  });

  const swaggerOptions = new DocumentBuilder()
    .setTitle('APIs')
    .setDescription('API docs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalInterceptors(new SerializerInterceptor());
  app.useGlobalPipes(new ValidationPipe(validationOptions));

  await app.listen(configService.get('app.port'));
}
bootstrap();
