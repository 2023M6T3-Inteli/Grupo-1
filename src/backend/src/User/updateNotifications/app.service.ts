import { Injectable } from '@nestjs/common';

import { ModelUpdate } from '../../models/modelsUpdate';

@Injectable()
export class ServiceUpdateNotifications {
    constructor(private modelUpdate: ModelUpdate) {}

    async execute(id:number) {
        return await this.modelUpdate.updateNotifications(id);
    }
}
