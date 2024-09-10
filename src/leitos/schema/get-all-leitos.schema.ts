import { SchemaObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";

export const GetAllLeitos: SchemaObject = {
    type: 'object',
    properties: {
        data: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    cdSetorAtendimento: {
                        type: 'number',
                        example: 47
                    },
                    dsSetorAtendimento: {
                        type: 'string',
                        example: 'Bloco Executivo'
                    }
                }
            }
        }
    }
}