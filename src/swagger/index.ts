import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export default (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Dealer API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('dealer')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
