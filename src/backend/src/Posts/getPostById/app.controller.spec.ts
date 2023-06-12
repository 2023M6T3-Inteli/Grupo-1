import { PrismaService } from "../../prismaServices/prisma.service"
import { ModelSelect } from '../../models/modelSelect';
import { ServiceGetPostsByUserId } from "./app.service";
import { ControllerGetPostById } from "./app.controller";
import { DTOBodyGetPostByUserId } from "./DTO/DTOBodyGetPostByUserId";

describe(' get project by idUser', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let serviceGetPostsByUserId: ServiceGetPostsByUserId
    let controllerGetPostById: ControllerGetPostById
    let body: DTOBodyGetPostByUserId = { idUser: 3 }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        serviceGetPostsByUserId = new ServiceGetPostsByUserId(modelSelect)
        controllerGetPostById = new ControllerGetPostById(serviceGetPostsByUserId)
    })

    describe('get all projects from especific idUSer', () => {
        it('retunr projects', async () => {
            expect(await controllerGetPostById.getPostByUserId(body)).toEqual(
                []
            )
        })
    })
})