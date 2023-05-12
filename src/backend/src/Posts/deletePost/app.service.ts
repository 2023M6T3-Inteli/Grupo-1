import { ModelSelect } from 'src/models/modelSelect';
import { ModelDelete } from 'src/models/modelDelete';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ServicesDeletePost {
    constructor(private readonly modelDelete: ModelDelete) {}

    async execute(idPost: number) {
        await this.modelDelete.deletePost(Number(idPost));

        return `Post ${idPost} deleted with success`;
    }
}
