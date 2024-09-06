import { Module } from '@nestjs/common';
import { LeitosController } from './leitos.controller';
import { OcupacaoSetores } from './leitos.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeitosService } from './leitos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OcupacaoSetores])
  ],
  controllers: [LeitosController],
  providers: [LeitosService],
  exports: [LeitosService],
})
export class LeitosModule {}
