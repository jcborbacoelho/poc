import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeitosModule } from './leitos/leitos.module';
import { CloudantModule } from './database/cloudant/cloudant.module';
import { MySqlModule } from './database/mysql/mysql.module';
import { PrevisaoAltaModule } from './paciente/previsao-alta/previsao-alta.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    LeitosModule,
    CloudantModule,
    MySqlModule,
    PrevisaoAltaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
