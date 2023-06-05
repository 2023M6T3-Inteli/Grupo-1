import { Injectable } from '@nestjs/common';

import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServiceGetPostsByUserId {
    constructor(private readonly modelSelect: ModelSelect) { }
    async execute(idUser: number) {
        const result = await this.modelSelect.getPostsByUserId(idUser);
        return result;
    }
}
