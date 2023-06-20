import { ModelSelect } from '../../models/modelSelect';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';


@Injectable()
export class ServiceGetComments {
    constructor(
        private readonly modelSelect: ModelSelect,
    ) {}

    async execute(idPost: number) {
        try {
            const getComments = await this.modelSelect.findComments(idPost);
            
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
