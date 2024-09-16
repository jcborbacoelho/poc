import { ApiProperty } from "@nestjs/swagger";
import { isArray, IsArray, IsDecimal, IsNumber, IsObject, isObject, IsOptional, IsString, ValidateNested } from "class-validator";


export class SimpleDto {
    @ApiProperty()
    @IsNumber()
    totalLeitos: number

    @ApiProperty()
    @IsNumber()
    totalOcupado: number
}

export class SetorLeitoGetDto {
    @ApiProperty()
    @IsNumber()
    cdSetorAtendimento: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    dsSetorAtendimento?: string | null;
}
export class LeitoGetDto {
    @ApiProperty()
    @IsNumber()
    cdSetorAtendimento: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    dsSetorAtendimento?: string | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    cdEstabelecimentoBase?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    cdClassifSetor?: string | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    nmUnidade?: string | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    dsOcupHosp?: string | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrSeqApresentacao?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidadesSetor?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidadesTemporarias?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidadesOcupadas?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtUnidadeAcomp?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidadesInterditadas?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidadesLivres?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidadesHigienizacao?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidadesReservadas?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtUnidadesIsolamento?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtUnidadesAlta?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtUnidadeSaidaInter?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtUnidadeChamadManut?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtUnidadeManutencao?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidTempOcup?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidTempOcupadas?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtUnidTempAcomp?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidTempInterditadas?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidTempLivres?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidTempHigienizacao?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidTempReservadas?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtUnidTempIsolamento?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtUnidTempSaidInterd?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtUnidTempAlta?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    nrUnidadesReserva?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    ieOcupHospitalar?: string | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    ieSituacao?: string | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtDisponiveis?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    qtPacIsolado?: number | null;

    @ApiProperty()
    @IsOptional()
    @IsDecimal({decimal_digits: '2', force_decimal: true})
    porcentagem?: number | null
}

export class OcupacaoTotalGetDto {
    @ApiProperty()
    @IsNumber()
    qtSetores: number | null;

    @ApiProperty()
    @IsNumber()
    qtDisponiveis: number | null;

    @ApiProperty()
    @IsNumber()
    qtLeitos: number | null;

    @ApiProperty()
    @IsDecimal({decimal_digits: '2', force_decimal: true})
    porcentagem: number | null
}

export class OcupacaoTotalDataGetDto {
    @IsObject()
    @ApiProperty({ type: OcupacaoTotalGetDto, isArray: false })
    @ValidateNested()
    data: OcupacaoTotalGetDto;
}

export class LeitoDataGetDto {
    @IsObject()
    @ApiProperty({ type: LeitoGetDto, isArray: false })
    @ValidateNested()
    data: LeitoGetDto;
}
export class SetorLeitoDataGetDto {
    @IsObject()
    @ApiProperty({ type: SetorLeitoGetDto, isArray: true })
    @ValidateNested()
    data: SetorLeitoGetDto[];
}


function Type(arg0: () => any): (target: LeitoDataGetDto, propertyKey: "data") => void {
    throw new Error("Function not implemented.");
}
