import { Body, Controller, Delete, Param, UseGuards } from '@nestjs/common';
import { ServicesDeletePost } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Post')
// @UseGuards(AuthGuard('jwt'))
export class ControllerDeletePost {
    constructor(private readonly serviceDeletePost: ServicesDeletePost) { }

    @Delete('deletePost/:id')
    @ApiOperation({ summary: 'Delete a post' })
    @ApiResponse({
        status: 200,
        description:
            '{"description": "string", "media": "string", "tags": [string], "idUser": number }'
    })
    @ApiResponse({
        status: 400,
        description:
            'idUser is required'
    })
    async deleteProject(@Param() id: { id: number }) {
        const result = await this.serviceDeletePost.execute(id.id);

        return result;
    }
}
