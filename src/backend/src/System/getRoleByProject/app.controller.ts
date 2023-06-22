import { Controller, Get, Param } from '@nestjs/common';
import { getRoleByProject } from './app.service';

@Controller()
export class controllerGetRoleByProject {
    constructor(private readonly appService: getRoleByProject) { }

    @Get('projects/:id/roles')
    async getProjectRoles(@Param('id') id: string) {
        const idProject = parseInt(id);
        return this.appService.getProjectRoles(idProject);
    }
}
