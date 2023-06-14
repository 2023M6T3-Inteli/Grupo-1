import {
    Body,
    Controller,
    Delete,
    Param,
    UseGuards,
    Query,
} from '@nestjs/common';
import { ServicesDeleteLikedPost } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Delete')
// @UseGuards(AuthGuard('jwt'))
export class ControllerDeleteLikedPost {
    constructor(
        private readonly serviceDeleteLikedPost: ServicesDeleteLikedPost,
    ) {}

    @Delete('deleteLikedPost')
    @ApiOperation({ summary: 'Delete a post' })
    @ApiResponse({
        status: 200,
        description:
            '{"description": "string", "media": "string", "tags": [string], "idUser": number }',
    })
    @ApiResponse({
        status: 400,
        description: 'idUser is required',
    })
    async deleteProject(@Body() body:{idUser:number, idPost:number}) {
        const result = await this.serviceDeleteLikedPost.execute(body);
        return result;
    }
}
