import { Injectable } from '@nestjs/common';
import { OcupacaoSetores } from './leitos.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeitoDataGetDto, OcupacaoTotalDataGetDto, SetorLeitoDataGetDto } from './dto/leitos.dto';
import { FilterDto } from './dto/filter.dto';
@Injectable()
export class LeitosService {
    constructor(
        @InjectRepository(OcupacaoSetores)
        private readonly OcupacaoSetoresRepository: Repository<OcupacaoSetores>
    ) { }

    async ocupacaoGeral(): Promise<OcupacaoTotalDataGetDto> {
        const setores = await this.OcupacaoSetoresRepository.find()

        const retorno = {
            qtSetores: setores.length,
            qtDisponiveis: 0,
            qtLeitos: 0,
            porcentagem: 0
        }

        setores.map(item => {
            retorno.qtDisponiveis += item.qtDisponiveis
            retorno.qtLeitos += item.nrUnidadesSetor
        })

        retorno.porcentagem = await this.calcPorcentagem(retorno.qtLeitos, retorno.qtDisponiveis)

        return {
            data: retorno
        }
    }

    async consultaByFilter( query: FilterDto ): Promise<LeitoDataGetDto> {
        let querySql: any = {}
        let setor = null

        if(query.cdSetorAtendimento) {
            querySql["cdSetorAtendimento"] = query.cdSetorAtendimento

            setor =  await this.OcupacaoSetoresRepository.findOneBy(querySql);
        }

        if(query.dsSetorAtendimento) {
            setor = await this.OcupacaoSetoresRepository
                .createQueryBuilder('OcupacaoSetores')
                .where('OcupacaoSetores.dsSetorAtendimento LIKE :dsSetorAtendimento', { 
                    dsSetorAtendimento: `%${query.dsSetorAtendimento}%` 
                })
                .getOne();
        }        

        if(setor) {
            setor['porcentagem'] = await this.calcPorcentagem(setor.nrUnidadesSetor, setor.nrUnidadesOcupadas)
        }

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

    private async calcPorcentagem(qtdTotal, qtdParcial): Promise<number> {
        const result = ((qtdParcial * 100) / qtdTotal).toFixed(2)

        return parseFloat(result)
    }
}
