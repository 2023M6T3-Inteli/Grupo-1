import { ModelSelect } from '../../models/modelSelect';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';


@Injectable()
export class ServiceGetPosts {
    constructor(
        private readonly modelSelect: ModelSelect,
    ) {}

    async execute() {
        try {
            const getPosts = await this.modelSelect.getAllPosts();
            return getPosts;
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
