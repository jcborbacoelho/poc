import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class LeitosGetDto {
    @ApiProperty()
    @IsNumber()
    totalLeitos: number

    @ApiProperty()
    @IsNumber()
    totalOcupado: number
}