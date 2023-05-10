import { ModelSelect } from '../../models/modelSelect';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { Tpost } from './types/TmodelCreate';

import { ModelCreate } from '../../models/modelCreate';

@Injectable()
export class ServiceCreatePost {
    constructor(
        private readonly modelCreate: ModelCreate,
        private readonly modelSelect: ModelSelect,
    ) { }

    async execute(data: Tpost) {
        const { idUser, media, description, tags } = data;

        const allProject = await this.modelSelect.getAllProjects();
        const allTags = await this.modelSelect.getAllTags();
        const allRoles = await this.modelSelect.getAllRoles();

        let alltagsIds = allTags.map(function (item) {
            return item.id;
        });

        // TODO verificar se o tempo de aplicationDeadLine não é o mesmo

        try {
            const firstStepProject = await this.modelCreate.createPost(data);
            return firstStepProject;
           
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }
}