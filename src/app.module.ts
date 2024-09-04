import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeitosModule } from './leitos/leitos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    LeitosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
