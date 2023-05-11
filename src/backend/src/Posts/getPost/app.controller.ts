import { ServiceGetPosts } from './app.service';
import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Post')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetComments {
    constructor(private serviceGetPosts: ServiceGetPosts) { }

    @Get('getPost')
    @ApiOperation({ summary: 'get Posts' })
    @ApiResponse({
        status: 201,
        description:
            '[{"description": "string", "media": "string", "tags": [string], "idUser": number },]',
    })
    @ApiResponse({
        status: 400,
        description: `id of post is required`,
    })
    // TODO fazer Api response para sucess e faild
    async getPost() {
        const result = await this.serviceGetPosts.execute();
        return result;
    }
}
