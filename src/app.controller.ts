import { Controller, Get, Res } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@Controller()
@ApiTags('App')
export class AppController {
  @Get("/")
  get(@Res() response: Response) {
    return response.status(200).send('ok')
  }

  @Get("/health")
  getHealth(@Res() response: Response) {
    return response.status(200).send('ok')
  }
}
