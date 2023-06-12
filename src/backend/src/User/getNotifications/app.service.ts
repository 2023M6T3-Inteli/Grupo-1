import { Injectable } from '@nestjs/common';

import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServiceGetNotifications {
    constructor(private modelSelect: ModelSelect) {}

    async execute(idUser:number) {
        return await this.modelSelect.getNewNotifications(idUser);
    }
}
