import { Injectable } from '@nestjs/common';

import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServiceGetAllTags {
    constructor(private modelSelect: ModelSelect) {}

    async execute() {
        return await this.modelSelect.getAllTags();
    }
}
