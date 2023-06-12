import { Injectable } from "@nestjs/common/decorators";
import { ModelSelect } from "../../models/modelSelect";


@Injectable()
export class ServiceGetLikedPost {
    constructor(private readonly modelSelect: ModelSelect) { }

    async execute(idUser: number) {
        const getUserId = await this.modelSelect.getLikedPost   (idUser);
        return getUserId
    }
}