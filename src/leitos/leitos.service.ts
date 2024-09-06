import { Injectable } from '@nestjs/common';
import { OcupacaoSetores } from './leitos.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class LeitosService {
    constructor(
        @InjectRepository(OcupacaoSetores)
        private readonly OcupacaoSetoresRepository: Repository<OcupacaoSetores>
    ) { }
    async consulta(
        cdSetorAtendimento: number
    ): Promise<OcupacaoSetores> {
        return await this.OcupacaoSetoresRepository.findOneBy({
            cdSetorAtendimento: cdSetorAtendimento
        });
    }
    async setores(): Promise<OcupacaoSetores[]> {
        return await this.OcupacaoSetoresRepository.createQueryBuilder('OcupacaoSetores')
            .select(['OcupacaoSetores.cdSetorAtendimento', 'OcupacaoSetores.dsSetorAtendimento'])
            .getMany();
    }
}
