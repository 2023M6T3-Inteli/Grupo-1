import { ModelSelect } from '../../models/modelSelect';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { Tproject } from './types/TmodelCreate';

import { ModelCreate } from '../../models/modelCreate';

@Injectable()
export class ServiceCreateProject {
    constructor(
        private readonly modelCreate: ModelCreate,
        private readonly modelSelect: ModelSelect,
    ) { }

    async execute(data: Tproject) {
        const { idTag, idRole, name, aplicationDeadLine, dateStart } = data;

        const allProject = await this.modelSelect.getAllProjects();
        const allTags = await this.modelSelect.getAllTags();
        const allRoles = await this.modelSelect.getAllRoles();

        let alltagsIds = allTags.map(function (item) {
            return item.id;
        });

        let allrolesIds = allRoles.map(function (item) {
            return item.id;
        });

        if (!idTag || idTag.length === 0) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'idTag is required',
                },
                HttpStatus.BAD_REQUEST,
            );
        }
        let validateTags = idTag.every((item) => alltagsIds.includes(item));
        let validateRoles = idRole.every((item) => allrolesIds.includes(item));

        allProject.map((item) => {
            if (item.name == name) {
                throw new HttpException(
                    {
                        status: HttpStatus.CONFLICT,
                        error: 'This name is in use',
                    },
                    HttpStatus.CONFLICT,
                );
            }
        });

        if (!validateTags) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: `Tags with the provided IDs do not exist`,
                },
                HttpStatus.NOT_FOUND,
            );
        }

        if (!validateRoles) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: `Roles with the provided IDs do not exist`,
                },
                HttpStatus.NOT_FOUND,
            );
        }

        try {
            const firstStepProject = await this.modelCreate.createProject(data);

            if (firstStepProject) {
                const { id } = firstStepProject;

                for (let index = 0; index < idTag.length; index++) {
                    await this.modelCreate.connectTagsProject(id, idTag[index]);
                }

                for (let index = 0; index < idRole.length; index++) {
                    await this.modelCreate.connectRolesProject(
                        id,
                        idRole[index],
                    );
                }

                return firstStepProject;
            } else {
                throw new HttpException(
                    {
                        status: HttpStatus.BAD_REQUEST,
                        error: 'Failed to create project, please try again',
                    },
                    HttpStatus.BAD_REQUEST,
                );
            }
        } catch (error) {
            console.error('Error in creating project:', error);
            throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Internal Server Error',
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
