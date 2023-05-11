import { ServiceGetPosts } from './app.service';
import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Get')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetComments {
    constructor(private serviceGetPosts: ServiceGetPosts) {}

    @Get('getPost')
    @ApiOperation({ summary: 'get Posts' })
    @ApiResponse({
        status: 201,
        description:
            '[{  name: string, description: string, aplicationDeadLine: string, dateStart: string, duration: string, isAproved: true, status: string, idUser: 0, idManager: 0, idProject: 0, idTag: [ string ], idRole: [ string]}]',
    })
    @ApiResponse({
        status: 400,
        description: `Failed to create a post`,
    })
    // TODO fazer Api response para sucess e faild
    async createPost() {
        const result = await this.serviceGetPosts.execute();
        return result;
    }
}
