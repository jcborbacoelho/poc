import { Module } from '@nestjs/common';
import { PrevisaoAltaController } from './previsao-alta.controller';
import { PrevisaoAltaService } from './previsao-alta.service';

@Module({
  controllers: [PrevisaoAltaController],
  providers: [PrevisaoAltaService]
})
export class PrevisaoAltaModule {}
