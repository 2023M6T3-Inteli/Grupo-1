import { ModelSelect } from '../../models/modelSelect';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { Tpost } from './types/TmodelCreate';
import { ModelUpdate } from '../../models/modelsUpdate';

import { ModelCreate } from '../../models/modelCreate';

@Injectable()
export class ServiceCreatePost {
    constructor(
        private readonly modelCreate: ModelCreate,
        private readonly modelSelect: ModelSelect,
        private readonly modelUpdate: ModelUpdate,
    ) { }

    async execute(data: Tpost) {
        const { idUser, media, description, idTag } = data;

        const allTags = await this.modelSelect.getAllTags();

        let alltagsIds = allTags.map(function (item) {
            return item.id;
        });

        let validateTags = idTag.every((item) => alltagsIds.includes(item));

        if (!validateTags) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: `does not exist tags with this id's`,
                },
                HttpStatus.NOT_FOUND,
            );
        }

        try {
            const firstStepPost = await this.modelCreate.createPost(data);
            const rankPoints = await this.modelUpdate.updatePostRankPoints(data);
            if (firstStepPost) {
                const { id } = firstStepPost;

                for (let index = 0; index < idTag.length; index++) {
                    await this.modelCreate.connectTagsPost(id, idTag[index]);
                }

                return firstStepPost;
            } else {
                throw new HttpException(
                    {
                        status: HttpStatus.BAD_REQUEST,
                        error: 'Failed create project, try again ',
                    },
                    HttpStatus.BAD_REQUEST,
                );
            }
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