import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LeitosGetDto } from './leitos.dto';

@Controller('leitos')
@ApiTags('Leitos')
export class LeitosController {

    @ApiResponse({
        status: 200,
        type: LeitosGetDto,
        description: 'Return all Records',
    })
    @Get()
    ocupacaoLeitos() {
        return {
            totalLeitos: 100,
            totalOcupado: 30
        }
    }
}
