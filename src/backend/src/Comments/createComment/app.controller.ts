import { ServiceCreateComment } from './app.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { DTOCreateComment } from './DTO/DTOCreateComment';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Comment')
// @UseGuards(AuthGuard('jwt'))
export class ControllerCreateComment {
    constructor(private serviceCreateCommnent: ServiceCreateComment) { }

    @Post('createComment')
    @ApiOperation({ summary: 'Create comment' })
    @ApiResponse({
        status: 201,
        description:
            '{"idPost": number, "idUser": number, "comment": "string"}',
    })
    @ApiResponse({
        status: 400,
        description: `Failed to create a comment`,
    })
    // TODO fazer Api response para sucess e faild
    async createPost(@Body() body: DTOCreateComment) {
        const { idPost, idUser, comment } = body;
        const result = await this.serviceCreateCommnent.execute(idUser, idPost, comment);
        return result;
    }
}
