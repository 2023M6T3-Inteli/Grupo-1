import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ServiceGetLikedPost } from "./app.service"
import { ControllerGetLikedPost } from "./app.controller"
import { DTOGetLikedPost } from "./DTO/DTOGetLikedPost"

describe('get liked posts', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let serviceGetLikedPost: ServiceGetLikedPost
    let controllerGetLikedPost: ControllerGetLikedPost
    let body: DTOGetLikedPost = { idUser: 1 }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        serviceGetLikedPost = new ServiceGetLikedPost(modelSelect)
        controllerGetLikedPost = new ControllerGetLikedPost(serviceGetLikedPost)
    })

    describe('get liked posts', () => {
        it('return posts liked by the user if id = 1', async () => {
            expect(await controllerGetLikedPost.getLikedPost(body)).toEqual(
                []
            )
        })
    })
})
