import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Health')
export class ControllerHelth {
    @Get('/')
    async hello() {
        return 'Project 6 API is working';
    }
}
