import { ModelSelect } from '../../models/modelSelect';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';


import { ModelCreate } from '../../models/modelCreate';
import { ModelUpdate } from 'src/models/modelsUpdate';

@Injectable()
export class ServiceCreateComment {
    constructor(
        private readonly modelCreate: ModelCreate,
        private readonly modelSelect: ModelSelect,
        private readonly modelUpdate: ModelUpdate,
    ) {}
    

    async execute(idUser:number,idPost:number,comment:string) {
        const checkPost = await this.modelSelect.findPostById(idPost);
        const checkUser = await this.modelSelect.getCheckExistentUsers(idUser);
        
        try {
            if (!checkPost) {
                throw new HttpException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        error: 'Does not exist project with this id',
                    },
                    HttpStatus.NOT_FOUND,
                );
            }

            if (!checkUser) {
                throw new HttpException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        error: 'Does not exist user with this id',
                    },
                    HttpStatus.NOT_FOUND,
                );
            }
            const description = `O usuário ${checkUser.fullName} comentou no seu post ${checkPost.id}`;
            const notification = await this.modelCreate.createPostNotification(idPost,description,);
            const rankPoints = await this.modelUpdate.updateCommentRankPoints(idPost);
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
