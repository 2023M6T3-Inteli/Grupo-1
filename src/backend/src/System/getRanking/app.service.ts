import { Injectable } from '@nestjs/common';

import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServiceGetRanking {
    constructor(private modelSelect: ModelSelect) {}

    async execute() {
        return await this.modelSelect.getRank();
    }
}
