import { PrismaService } from "../../prismaServices/prisma.service";
import { ServiceGetComments } from "./app.service";
import { ControllerGetComments } from "./app.controller";
import { DTOGetComments } from "./DTO/DTOGetComments";
import { ModelSelect } from "../../models/modelSelect";

describe('create comment', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let serviceGetComments: ServiceGetComments
    let controllerGetComments: ControllerGetComments
    let body: DTOGetComments = {
        idPost: 1
    }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        serviceGetComments = new ServiceGetComments(modelSelect)
        controllerGetComments = new ControllerGetComments(serviceGetComments)
    })

    describe('create comment', () => {
        it('return comment created', async () => {
            expect(await controllerGetComments.getComment(body)).toBeTruthy()
        })
    })
})

