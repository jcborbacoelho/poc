import { Module } from '@nestjs/common';
import { CloudantService } from './cloudant.service';

@Module({
  providers: [CloudantService]
})
export class CloudantModule {}
