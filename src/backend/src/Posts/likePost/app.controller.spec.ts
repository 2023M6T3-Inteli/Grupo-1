import { ModelCreate } from "../../models/modelCreate"
import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ControllerLikePost } from "./app.controller"
import { ServiceLikePost } from "./app.service"
import { DTOLikePost } from "./DTO/DTOLikePost"

describe('save project', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let modelCreate: ModelCreate
    let serviceLikePost: ServiceLikePost
    let controllerSaveProject: ControllerLikePost
    let body: DTOLikePost = { idUser: 1, idPost: 1 }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        modelCreate = new ModelCreate(prisma)
        serviceLikePost = new ServiceLikePost(modelCreate, modelSelect)
        controllerSaveProject = new ControllerLikePost(serviceLikePost)
    })

    describe('user save a project', () => {
        it('return saved project', async () => {
            expect(await controllerSaveProject.saveProject(body)).toEqual(
                undefined
            )
        })
    })
})