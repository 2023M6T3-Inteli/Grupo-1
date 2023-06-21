import { Injectable } from '@nestjs/common';

import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServiceGetAllRoles {
    constructor(private modelSelect: ModelSelect) { }

    async execute() {
        return await this.modelSelect.getAllRoles();
    }
}
