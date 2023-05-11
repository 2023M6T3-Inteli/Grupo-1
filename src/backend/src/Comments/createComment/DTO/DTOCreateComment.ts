import { IsNotEmpty, IsPositive, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
//TODO pensar em outras validações

export class DTOCreateComment {
    @ApiProperty()
    @IsNotEmpty({ message: 'idPost is required' })
    @IsPositive({ message: 'idPost must be a positive number' })
    @IsNumber()
    idPost: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'idUser is required' })
    @IsPositive({ message: 'idUser must be a positive number' })
    @IsNumber()
    idUser: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'comment is required' })
    @IsString({ message: 'comment must be a boolean' })
    comment: string;
}
