import { Injectable } from '@nestjs/common';

import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServiceGetRankingUser {
    constructor(private modelSelect: ModelSelect) {}

    async execute(idUser:number) {
        return await this.modelSelect.getRankUser(idUser);
    }
}
