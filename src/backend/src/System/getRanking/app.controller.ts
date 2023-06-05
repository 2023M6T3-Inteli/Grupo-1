import { Controller, Get, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { ServiceGetRanking } from './app.service';

@Controller()
@ApiTags('System')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetRanking {
    constructor(
        private readonly serviceGetRanking: ServiceGetRanking,
    ) {}

    @Get('getRank')
    @ApiBearerAuth()
    @ApiOperation({ summary: `get the ranking` })
    async getRank() {
        const projects = await this.serviceGetRanking.execute();
        return projects;
    }
}
