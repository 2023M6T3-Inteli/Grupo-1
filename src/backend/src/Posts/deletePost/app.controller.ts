import { Body, Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { ServicesDeletePost } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
// @UseGuards(AuthGuard('jwt'))
export class ControllerDeletePost {
    constructor(private readonly serviceDeletePost: ServicesDeletePost) {}

    @Delete('post/:id')
    async deleteProject(@Param() id: { id: number }) {
        const result = await this.serviceDeletePost.execute(id.id);

        return result;
    }
}
