import { Controller, Get, UseGuards, HttpStatus,Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { ServiceGetNotifications } from './app.service';

@Controller()
@ApiTags('System')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetNotifications {
    constructor(
        private readonly serviceGetNotifications: ServiceGetNotifications,
    ) {}

    @Get(`getNotifications/:id`)
    @ApiBearerAuth()
    @ApiOperation({ summary: `get the notifications` })
    async getNotifications(@Param() id: { id: number }) {
        const projects = await this.serviceGetNotifications.execute(Number(id.id));
        return projects;
    }
}
