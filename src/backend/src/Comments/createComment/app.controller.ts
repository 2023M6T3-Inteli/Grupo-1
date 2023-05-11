import { ServiceCreateComment } from './app.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { DTOCreateComment } from './DTO/DTOCreateComment';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Post')
// @UseGuards(AuthGuard('jwt'))
export class ControllerCreateComment {
    constructor(private serviceCreateCommnent: ServiceCreateComment) {}

    @Post('createPost')
    @ApiOperation({ summary: 'Create comment' })
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
    async createPost(@Body() body: DTOCreateComment) {
        const { idPost, idUser, comment } = body;
        const result = await this.serviceCreateCommnent.execute(idUser,idPost,comment);
        return result;
    }
}
