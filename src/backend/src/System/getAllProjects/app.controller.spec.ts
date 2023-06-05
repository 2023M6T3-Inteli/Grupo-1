
import { ModelSelect } from "../../models/modelSelect"
import { PrismaService } from "../../prismaServices/prisma.service"
import { ControllerGetAllProject } from "./app.controller"
import { ServiceGetAllProjects } from "./app.service"


describe('get all projects', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let serviceGetAllProjects: ServiceGetAllProjects
    let controllerGetAllProject: ControllerGetAllProject

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        serviceGetAllProjects = new ServiceGetAllProjects(modelSelect)
        controllerGetAllProject = new ControllerGetAllProject(serviceGetAllProjects)
    })
    describe('get all projects in db', () => {
        it('return all projects', async () => {
            expect(await controllerGetAllProject.getAllProjects()).toMatchObject([{
                "aplicationDeadLine": new Date("2019-12-21T23:00:00.000Z"),
                "dateStart": new Date("2019-12-20T17:48:00.000Z"),
                "description": "pewoeoewpofeofjefpew",
                "duration": "15",
                "idUser": 1,
                "leader": "Gustavo lion",
                "projectTag": [],
                "status": "Fechado",
            }
            ])
        })
    })
})