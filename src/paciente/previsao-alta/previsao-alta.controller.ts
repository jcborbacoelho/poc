import { Controller, Get, Param } from '@nestjs/common';
import { PrevisaoAltaService } from './previsao-alta.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('previsao-alta')
export class PrevisaoAltaController {
    constructor(private readonly previsaoAlta: PrevisaoAltaService) { }
    /*@ApiResponse({
        status: 200,
        type: LeitoGetDto,
        description: 'Seleciona informações de um leito',
    })
    @Get('/setores/:cdSetorAtendimento')
    async ocupacaoLeitosBySetor(
        @Param('cdSetorAtendimento') cdSetorAtendimento: number,
    ) {
        return await this.leitosService.consulta(cdSetorAtendimento);
    }*/
}
