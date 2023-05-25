import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DTOBodyGetPostByUserId {
    @ApiProperty()
    @IsNotEmpty()
    idUser: number;
}
