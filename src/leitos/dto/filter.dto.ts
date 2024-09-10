import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class FilterDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsNumber()
    cdSetorAtendimento?: number | null;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    dsSetorAtendimento?: string | null;
}