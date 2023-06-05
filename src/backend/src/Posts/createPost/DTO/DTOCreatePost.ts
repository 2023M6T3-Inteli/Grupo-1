import { IsNotEmpty, Length, IsString, IsNumber, isNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DTOBodyCreatePost {
    @ApiProperty()
    @IsString({ message: `descriptionis not a string` })
    description: string;

    @ApiProperty()
    @IsString({ message: `media not a string` })
    media: string;

    @ApiProperty()
    idTag: number[];

    @ApiProperty()
    idUser: number;

}
