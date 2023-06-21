import { Controller, Put, UseGuards, HttpStatus,Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { ServiceUpdateNotifications } from './app.service';

@Controller()
@ApiTags('System')
// @UseGuards(AuthGuard('jwt'))
export class ControllerUpdateNotifications {
    constructor(
        private readonly serviceUpdateNotifications: ServiceUpdateNotifications,
    ) {}

    @Put(`updateNotifications/:id`)
    @ApiBearerAuth()
    @ApiOperation({ summary: `update the notifications` })
    async getNotifications(@Param() id: { id: number }) {
        const projects = await this.serviceUpdateNotifications.execute(Number(id.id));
        return projects;
    }
}
