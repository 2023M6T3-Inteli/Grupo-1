import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ServiceGetPostsByUserId } from './app.service';
import { DTOBodyGetPostByUserId } from './DTO/DTOBodyGetPostByUserId';
import { AuthGuard } from '@nestjs/passport';

@Controller()
@ApiTags('System')
// @UseGuards(AuthGuard('jwt'))
export class ControllerGetPostById {
    constructor(
        private serviceGetPostsByUserId: ServiceGetPostsByUserId,
    ) { }

    @Get('getPostByUserId/:idUser')
    @ApiOperation({ summary: 'Get infos project by id leader' })
    // TODO fazer Api response para sucess e faild
    async getPostByUserId(@Param() id: { idUser: number }) {
        console.log(id.idUser)
        const result = await this.serviceGetPostsByUserId.execute(
            Number(id.idUser),
        );
        return result;
    }
}
