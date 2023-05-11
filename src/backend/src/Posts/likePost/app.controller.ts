import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceLikePost } from './app.service';
import { DTOLikePost } from './DTO/DTOLikePost';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Post')
// @UseGuards(AuthGuard('jwt'))
export class ControllerLikePost {
    constructor(private serviceLikePost: ServiceLikePost) { }

    @Post('likePost')
    @ApiOperation({ summary: 'User can like posts' })
    @ApiResponse({
        status: 201,
        description: `[{idPost: number, idUser: number}]`,
    })
    @ApiResponse({
        status: 300,
        description: `This data of like post already exist`,
    })
    @ApiResponse({
        status: 404,
        description: `Does not exist user or post with this id`,
    })
    async saveProject(@Body() body: DTOLikePost) {
        const { idPost, idUser } = body;

        const result = await this.serviceLikePost.execute(idPost, idUser);
        return result;
    }
}
