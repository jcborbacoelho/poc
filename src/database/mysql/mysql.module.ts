import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: "mysql",
        host: process.env.DB_SQL_HOST,
        port: parseInt(process.env.DB_SQL_PORT),
        username: process.env.DB_SQL_USERNAME,
        password: process.env.DB_SQL_PASSWORD,
        database: process.env.DB_SQL_DATABASE,
        entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
    }),
  ],
})
export class MySqlModule {}
