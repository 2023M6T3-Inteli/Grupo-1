import { ServiceGetPosts } from './app.service';
import { Body, Controller, Get, UseGuards, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';
import { publish } from 'src/main';

@Controller()
@ApiTags('Get')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetPosts {
    constructor(private serviceGetPosts: ServiceGetPosts) {}

    @Get('getPost')
    @ApiOperation({ summary: 'get Posts' })
    @ApiResponse({
        status: 201,
        description:
            '[{"description": "string", "media": "string", "tags": [string], "idUser": number },]',
    })
    @ApiResponse({
        status: 404,
        description: `Bad Request, Not Found`,
    })
    // TODO fazer Api response para sucess e faild
    async getPost(@Query('tag') tag: string): Promise<any[]> {
        const message = tag;
        const posts = await this.serviceGetPosts.execute();

        const recommendations = await publish(
            'intelies-grupo1/publish',
            message,
        );

        if (recommendations !== 'No message received') {
            const formatedRecommendations = JSON.parse(recommendations);

            posts.forEach((post, index) => {
                post.description = formatedRecommendations[index];
            });
        }
        
        return posts;
    }
}
