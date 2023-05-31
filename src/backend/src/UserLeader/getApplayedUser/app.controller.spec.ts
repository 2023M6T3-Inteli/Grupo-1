import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ServiceGetApplayedUser } from "./app.service"
import { ControllerGetApplayedUser } from "./app.controller"
import { DtoBodyApployed } from "./DTO/DtoBodyGetApployed"


describe('get applied user', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let serviceGetApplayedUser: ServiceGetApplayedUser
    let controllerGetApplayedUser: ControllerGetApplayedUser
    let body: DtoBodyApployed = { idProject: 2 }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        serviceGetApplayedUser = new ServiceGetApplayedUser(modelSelect)
        controllerGetApplayedUser = new ControllerGetApplayedUser(serviceGetApplayedUser)
    })

    describe('catch the applied users', () => {
        it('return applieds user for this project', async () => {
            expect(await controllerGetApplayedUser.getApplayed(body)).toEqual(
                [{
                    "id": 3,
                    "role": {
                        "name": "Design UX",
                    },
                    "user": {
                        "email": "bonitao@dell.com",
                        "fullName": "bonitao",
                    },
                },]
            )
        })
    })
})