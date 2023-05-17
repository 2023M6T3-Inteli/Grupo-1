import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ModelCreate } from "../../models/modelCreate";
import { ModelSelect } from "../../models/modelSelect";

@Injectable()
export class ServiceLikePost {
    constructor(private readonly modelCreate: ModelCreate, private readonly modelSelect: ModelSelect) { }

    async execute(idPost: number, idUser: number) {
        const checkPost = await this.modelSelect.findPostById(idPost)
        const checkUser = await this.modelSelect.getCheckExistentUsers(idUser)
        const getUsersAndPostId = await this.modelSelect.getExistUserAndPostInPostLike(idPost, idUser)

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
                    error: 'Does not exist user with this id'
                },
                HttpStatus.NOT_FOUND,
            );
        }

        if (getUsersAndPostId.length != 0) {
            throw new HttpException(
                {
                    status: HttpStatus.AMBIGUOUS,
                    error: 'This data of save project already exist'
                },
                HttpStatus.AMBIGUOUS,
            );
        }

        const result = await this.modelCreate.likePost(idPost, idUser);
        return result;
    }
}
