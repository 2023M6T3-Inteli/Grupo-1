import { Controller, Get, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { ServiceGetAllRoles } from './app.service';

@Controller()
@ApiTags('System')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetAllRoles {
    constructor(
        private readonly serviceGetAllRoles: ServiceGetAllRoles,
    ) { }

    @Get('getAllRoles')
    @ApiBearerAuth()
    @ApiOperation({ summary: `get all roles from database` })
    async getAllProjects() {
        const tags = await this.serviceGetAllRoles.execute();
        return tags;
    }
}
