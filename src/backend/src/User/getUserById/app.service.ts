import { Injectable } from '@nestjs/common';

import { ModelSelect } from '../../models/modelSelect';

@Injectable()
export class ServiceGetUserById {
    constructor(private modelSelect: ModelSelect) {}

    async execute(idUser:number) {
        return await this.modelSelect.getUserById(idUser);
    }
}
