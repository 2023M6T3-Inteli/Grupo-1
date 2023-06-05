import { Controller, Get, UseGuards, HttpStatus,Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { ServiceGetUserById } from './app.service';

@Controller()
@ApiTags('System')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetUserById {
    constructor(
        private readonly serviceGetUserById: ServiceGetUserById,
    ) {}

    @Get(`getUserById/:id`)
    @ApiBearerAuth()
    @ApiOperation({ summary: `get the notifications` })
    async getUserById(@Param() id: { id: number }) {
        const user = await this.serviceGetUserById.execute(Number(id.id));
        return user;
    }
}
