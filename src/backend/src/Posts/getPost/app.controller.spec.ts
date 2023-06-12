
import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ControllerGetPosts } from "./app.controller"
import { ServiceGetPosts } from "./app.service"


describe('get all projects', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let serviceGetPosts: ServiceGetPosts
    let controllerGetPosts: ControllerGetPosts

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        serviceGetPosts = new ServiceGetPosts(modelSelect)
        controllerGetPosts = new ControllerGetPosts(serviceGetPosts)
    })
    describe('get all projects in db', () => {
        it('return all projects', async () => {
            expect(await controllerGetPosts.getPost()).toBeTruthy()
        })
    })
})