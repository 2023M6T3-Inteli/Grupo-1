import { ServiceGetComments } from './app.service';
import { Body, Controller, Post, UseGuards, Get,Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Comment')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetComments {
    constructor(private serviceGetComments: ServiceGetComments) {}

    @Get('getComment/:idPost')
    @ApiOperation({ summary: 'Get comment' })
    @ApiResponse({
        status: 201,
        description:
            '[{ "idPost": 1, "idUser": 1, "comment": "lorem lorem lorem lorem lorem lorem lorem" }]',
    })
    @ApiResponse({
        status: 400,
        description: `Failed to get a comment`,
    })
    // TODO fazer Api response para sucess e faild
    async getComment(@Param() id: { idPost: number }) {
    
        const result = await this.serviceGetComments.execute(Number(id.idPost));
        return result;
    }
}
