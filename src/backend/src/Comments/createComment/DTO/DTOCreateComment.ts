import { IsNotEmpty, IsPositive, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
//TODO pensar em outras validações

export class DTOCreateComment {
    @ApiProperty()
    @IsNotEmpty({ message: 'idPost is required' })
    @IsNumber()
    idPost: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'idUser is required' })
    @IsNumber()
    idUser: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'comment is required' })
    @IsString({ message: 'comment must be a boolean' })
    comment: string;
}
