import { Injectable } from '@nestjs/common';
import { OcupacaoSetores } from './leitos.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeitoDataGetDto, SetorLeitoDataGetDto } from './dto/leitos.dto';
import { FilterDto } from './dto/filter.dto';
@Injectable()
export class LeitosService {
    constructor(
        @InjectRepository(OcupacaoSetores)
        private readonly OcupacaoSetoresRepository: Repository<OcupacaoSetores>
    ) { }

    async consultaByFilter( query: FilterDto ): Promise<LeitoDataGetDto> {
        let querySql: any = {}

        if(query.cdSetorAtendimento) {
            querySql["cdSetorAtendimento"] = query.cdSetorAtendimento
        }

        if(query.dsSetorAtendimento) {
            querySql["dsSetorAtendimento"] = query.dsSetorAtendimento
        }

        const setor =  await this.OcupacaoSetoresRepository.findOneBy(querySql);

        return {
            data: setor
        }
    }

    async setores(): Promise<SetorLeitoDataGetDto> {
        const setores =  await this.OcupacaoSetoresRepository.createQueryBuilder('OcupacaoSetores')
            .select(['OcupacaoSetores.cdSetorAtendimento', 'OcupacaoSetores.dsSetorAtendimento'])
            .getMany();

        return {
            data: setores
        }
    }
}
