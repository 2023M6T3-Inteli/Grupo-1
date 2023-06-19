import { ModelSelect } from 'src/models/modelSelect';
import { ModelDelete } from 'src/models/modelDelete';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ServicesDeleteLikedPost {
    constructor(private readonly modelDelete: ModelDelete) {}

    async execute(body) {
        console.log( body)
        await this.modelDelete.deleteLikedPost(body);

        return `Post ${body} deleted with success`;
    }
}
