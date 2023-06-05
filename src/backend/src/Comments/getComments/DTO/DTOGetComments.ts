import { IsNotEmpty, IsPositive, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
//TODO pensar em outras validações

export class DTOGetComments {
    @ApiProperty()
    @IsNotEmpty({ message: 'idPost is required' })
    @IsPositive({ message: 'idPost must be a positive number' })
    @IsNumber()
    idPost: number;

}
