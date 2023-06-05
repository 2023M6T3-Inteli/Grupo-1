import { Controller, Get, UseGuards, HttpStatus,Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { ServiceGetAllNotifications } from './app.service';

@Controller()
@ApiTags('System')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetAllNotifications {
    constructor(
        private readonly serviceGetAllNotifications: ServiceGetAllNotifications,
    ) {}

    @Get(`getAllNotifications/:id`)
    @ApiBearerAuth()
    @ApiOperation({ summary: `get the notifications` })
    async getNotifications(@Param() id: { id: number }) {
        const projects = await this.serviceGetAllNotifications.execute(Number(id.id));
        return projects;
    }
}
