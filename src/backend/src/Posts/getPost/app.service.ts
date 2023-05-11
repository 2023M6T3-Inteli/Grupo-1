import { ModelSelect } from '../../models/modelSelect';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';


@Injectable()
export class ServiceGetPosts {
    constructor(
        private readonly modelSelect: ModelSelect,
    ) {}

    async execute() {
        try {
            const getComments = await this.modelSelect.getAllPosts();
            return getComments;
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
