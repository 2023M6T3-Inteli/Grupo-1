import { ServiceUpdateApprovalProject } from './app.service'
import { ControllerApprovalProject } from './app.controller'
import { ModelUpdate } from '../../models/modelsUpdate'
import { ModelSelect } from '../../models/modelSelect'
import { PrismaService } from '../../prismaServices/prisma.service'
import { DTOBodyApprovalProject } from './DTO/DTOBodyApprovalProject'

describe('approval project', () => {
    let prisma: PrismaService
    let modelSelect: ModelSelect
    let modelUpdate: ModelUpdate
    let serviceUpdateApprovalProject: ServiceUpdateApprovalProject
    let controllerApprovalProject: ControllerApprovalProject
    let body: DTOBodyApprovalProject = { idManager: 2, idProject: 1, isApproved: true }

    beforeEach(() => {
        prisma = new PrismaService()
        modelSelect = new ModelSelect(prisma)
        modelUpdate = new ModelUpdate(prisma)
        serviceUpdateApprovalProject = new ServiceUpdateApprovalProject(modelUpdate, modelSelect)
        controllerApprovalProject = new ControllerApprovalProject(serviceUpdateApprovalProject)
    })

    describe('test approval projects', () => {
        it('returne approved or rejected project', async () => {
            expect(await controllerApprovalProject.approvalProject(body)).toEqual(
                {
                    "id": 1,
                    "name": "projeto teste123",
                    "description": "pewoeoewpofeofjefpew",
                    "aplicationDeadLine": new Date("2019-12-21T23:00:00.000Z"),
                    "duration": "15",
                    "status": "Fechado",
                    "dateStart": new Date("2019-12-20T17:48:00.000Z"),
                    "isApproved": true,
                    "idUser": 1,
                    "idManager": 2
                })
        })
    })
})