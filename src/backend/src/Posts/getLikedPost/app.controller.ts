import { Controller, Body, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceGetLikedPost } from './app.service';
import { DTOGetLikedPost } from './DTO/DTOGetLikedPost';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('Project')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetLikedPost {
    constructor(private serviceGetLikedPost: ServiceGetLikedPost) {}

    @Get('getlikedposts')
    @ApiOperation({ summary: `Get saved projects from specific user` })
    @ApiResponse({
        status: 201,
        description: `[{idUser: number}]`,
    })
    async getLikedPost(@Body() body: DTOGetLikedPost) {
        const { idUser } = body;
        const getSaved = await this.serviceGetLikedPost.execute(idUser);
        return getSaved;
    }
}
