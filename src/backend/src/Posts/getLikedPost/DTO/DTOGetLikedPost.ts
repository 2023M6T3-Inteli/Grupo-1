import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class DTOGetLikedPost {

    @IsNotEmpty()
    @ApiProperty()
    idUser: number
}