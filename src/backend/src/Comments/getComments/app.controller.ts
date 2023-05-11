import { ServiceGetComments } from './app.service';
import { Body, Controller, Post, UseGuards,Get } from '@nestjs/common';
import { DTOGetComments } from './DTO/DTOGetComments';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Get')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetComments {
    constructor(private serviceGetComments: ServiceGetComments) {}

    @Get('getComment')
    @ApiOperation({ summary: 'Create comment' })
    @ApiResponse({
        status: 201,
        description:
            '[{  name: string, description: string, aplicationDeadLine: string, dateStart: string, duration: string, isAproved: true, status: string, idUser: 0, idManager: 0, idProject: 0, idTag: [ string ], idRole: [ string]}]',
    })
    @ApiResponse({
        status: 400,
        description: `Failed to get a post`,
    })
    // TODO fazer Api response para sucess e faild
    async createPost(@Body() body: DTOGetComments) {
        const { idPost} = body;
        const result = await this.serviceGetComments.execute(
            idPost
        );
        return result;
    }
}
