import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { apiReference } from '@scalar/nestjs-api-reference'


async function bootstrap() {

  const logger = new Logger('NestFactory');
  logger.log('Application run port: ' + process.env.PORT);

  const app = await NestFactory.create(AppModule);
  const baseUrl = process.env.BASE_URL

  const documentBuilder = new DocumentBuilder()
    .setTitle('POC Tasy')
    .setDescription(
      'Está API tem por objetivo, disponibilizar End-Points para envio dos dados do Censo Titularidade e Produto.',
    )
    .setExternalDoc('Postman Collection', `${baseUrl}/documentation-json`)
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', name: 'Authorization', in: 'header' }, 'Authorization')
    .addServer(`${baseUrl}`, 'URL Base da API',)
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);

  SwaggerModule.setup('documentation', app, document);
  app.use(
    '/reference',
    apiReference({
      spec: {
        url: '/documentation-json',
      },
    }),
  )
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
