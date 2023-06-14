import { Controller, Get, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { ServiceGetAllTags } from './app.service';

@Controller()
@ApiTags('System')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetAllTags {
    constructor(
        private readonly serviceGetAllTags: ServiceGetAllTags,
    ) {}

    @Get('getAllTags')
    @ApiBearerAuth()
    @ApiOperation({ summary: `get all tags from database` })
    async getAllProjects() {
        const tags = await this.serviceGetAllTags.execute();
        return tags;
    }
}
