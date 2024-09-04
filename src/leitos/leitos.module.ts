import { Module } from '@nestjs/common';
import { LeitosController } from './leitos.controller';

@Module({
  controllers: [LeitosController]
})
export class LeitosModule {}
