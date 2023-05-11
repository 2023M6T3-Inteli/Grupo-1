import { ModelSelect } from '../../models/modelSelect';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';


import { ModelCreate } from '../../models/modelCreate';

@Injectable()
export class ServiceCreateComment {
    constructor(
        private readonly modelCreate: ModelCreate,
        private readonly modelSelect: ModelSelect,
    ) {}

    async execute(idUser:number,idPost:number,comment:string) {


        try {
            const createComment = await this.modelCreate.createComment(idUser,idPost,comment);
            return createComment;
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
