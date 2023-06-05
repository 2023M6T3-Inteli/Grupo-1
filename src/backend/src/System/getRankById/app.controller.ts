import { Controller, Get, UseGuards, HttpStatus,Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { ServiceGetRankingUser } from './app.service';

@Controller()
@ApiTags('System')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetRankingUser {
    constructor(
        private readonly serviceGetRankingUser: ServiceGetRankingUser,
    ) {}

    @Get(`getRankUser/:id`)
    @ApiBearerAuth()
    @ApiOperation({ summary: `get the ranking` })
    async getRank(@Param() id: { id: number }) {
        const projects = await this.serviceGetRankingUser.execute(Number(id.id));
        return projects;
    }
}
