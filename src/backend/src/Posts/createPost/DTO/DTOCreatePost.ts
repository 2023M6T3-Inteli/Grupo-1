import { IsNotEmpty, Length, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DTOBodyCreatePost {
    @ApiProperty()
    @IsString({ message: `descriptionis not a string` })
    description: string;
    @IsString({ message: `media not a string` })
    media: string;
    @IsString({ message: `media not a string` })
    tags: string;

    @ApiProperty()
    idUser: number;

}
