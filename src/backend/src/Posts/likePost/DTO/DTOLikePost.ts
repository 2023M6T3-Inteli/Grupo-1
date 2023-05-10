import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class DTOLikePost {
    @ApiProperty()
    @IsNotEmpty()
    idPost: number;

    @ApiProperty()
    @IsNotEmpty()
    idUser: number
}