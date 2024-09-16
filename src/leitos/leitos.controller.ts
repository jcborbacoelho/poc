import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LeitoDataGetDto, LeitoGetDto, OcupacaoTotalDataGetDto, SetorLeitoDataGetDto, SetorLeitoGetDto } from './dto/leitos.dto';
import { LeitosService } from "./leitos.service"
import { GetAllLeitos } from './schema/get-all-leitos.schema';
import { FilterDto } from './dto/filter.dto';

@Controller('leitos')
@ApiTags('Leitos')
export class LeitosController {
    constructor(private readonly leitosService: LeitosService) { }

    @ApiResponse({
        status: 200,
        type: OcupacaoTotalDataGetDto,
        description: 'Seleciona informações de todos os leitos',
    })
    @Get('/ocupacao/geral')
    async ocupacaoGeral() {
        return await this.leitosService.ocupacaoGeral();
    }

    @ApiResponse({
        status: 200,
        type: LeitoDataGetDto,
        description: 'Seleciona informações de um leito de acordo com a Descrição informada',
    })
    @Get('/setores/filtro')
    @ApiQuery({ name: 'cdSetorAtendimento', required: false })
    @ApiQuery({ name: 'dsSetorAtendimento', required: false })
    async ocupacaoLeitosBySetorDescricao(
        @Query() query: FilterDto,
    ) {
        return await this.leitosService.consultaByFilter(query);
    }

    @ApiResponse({
        status: 200,
        description: 'Retorna todos setores',
        schema: GetAllLeitos
    })
    @Get('/setores')
    async listarSetores(): Promise<SetorLeitoDataGetDto> {
        return await this.leitosService.setores();
    }
}

