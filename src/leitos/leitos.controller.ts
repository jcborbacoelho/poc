import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LeitosGetDto } from './leitos.dto';
import { LeitosService } from "./leitos.service"

@Controller('leitos')
@ApiTags('Leitos')
export class LeitosController {
    constructor(private readonly leitosService: LeitosService) { }
    @ApiResponse({
        status: 200,
        type: LeitosGetDto,
        description: 'Return all Records',
    })
    @Get(':cdSetorAtendimento')
    async ocupacaoLeitosBySetor(
        @Param('cdSetorAtendimento') cdSetorAtendimento: number,
    ) {
        return await this.leitosService.consulta(cdSetorAtendimento);
    }
    @Get('/setores')
    async listarSetores() {
        return await this.leitosService.setores();
    }
}

