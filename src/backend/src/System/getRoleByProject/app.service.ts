import { Injectable } from '@nestjs/common';
import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class getRoleByProject {
    constructor(private modelSelect: ModelSelect) { }

    async getProjectRoles(idProject: number) {
        return this.modelSelect.getProjectRoles(idProject);
    }
}
