import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LeitoGetDto, SetorLeitoGetDto } from './leitos.dto';
import { LeitosService } from "./leitos.service"

@Controller('leitos')
@ApiTags('Leitos')
export class LeitosController {
    constructor(private readonly leitosService: LeitosService) { }
    @ApiResponse({
        status: 200,
        type: LeitoGetDto,
        description: 'Seleciona informações de um leito',
    })
    @Get('/setores/:cdSetorAtendimento')
    async ocupacaoLeitosBySetor(
        @Param('cdSetorAtendimento') cdSetorAtendimento: number,
    ) {
        return await this.leitosService.consulta(cdSetorAtendimento);
    }
    @ApiResponse({
        status: 200,
        type: SetorLeitoGetDto,
        description: 'Retorna todos setores',
    })
    @Get('/setores')
    async listarSetores() {
        return await this.leitosService.setores();
    }
}

