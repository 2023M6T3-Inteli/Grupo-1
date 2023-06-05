import { ServiceCreatePost } from './app.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { DTOBodyCreatePost } from './DTO/DTOCreatePost';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Post')
// @UseGuards(AuthGuard('jwt'))
export class ControllerCreatePost {
    constructor(private serviceCreatePost: ServiceCreatePost) { }

    @Post('createPost')
    @ApiOperation({ summary: 'Create a post' })
    @ApiResponse({
        status: 201,
        description:
            '{"description": "string", "media": "string", "tags": [string], "idUser": number }',
    })
    @ApiResponse({
        status: 400,
        description: `Failed to create a post`,
    })
    @ApiResponse({
        status: 404,
        description: `Does not exist tags with this id's`,
    })
    // TODO fazer Api response para sucess e faild
    async createPost(@Body() body: DTOBodyCreatePost) {
        const result = await this.serviceCreatePost.execute(body);
        return result;
    }
}
