import { PrismaService } from "../../prismaServices/prisma.service";
import { ServiceCreateComment } from "./app.service";
import { ControllerCreateComment } from "./app.controller";
import { DTOCreateComment } from "./DTO/DTOCreateComment";
import { ModelCreate } from "../../models/modelCreate";
import { ModelSelect } from "../../models/modelSelect";
import { ModelUpdate } from "../../models/modelsUpdate";

describe('create comment', () => {
    let prisma: PrismaService
    let modelCreate: ModelCreate
    let modelUpdate: ModelUpdate
    let modelSelect: ModelSelect
    let serviceCreateComment: ServiceCreateComment
    let controllerCreateComment: ControllerCreateComment
    let body: DTOCreateComment = {
        idPost: 1,
        idUser: 1,
        comment: "comentario criado com sucesso"
    }

    beforeEach(() => {
        prisma = new PrismaService()
        modelCreate = new ModelCreate(prisma)
        modelUpdate = new ModelUpdate(prisma)
        modelSelect = new ModelSelect(prisma)
        serviceCreateComment = new ServiceCreateComment(modelCreate, modelSelect, modelUpdate)
        controllerCreateComment = new ControllerCreateComment(serviceCreateComment)
    })

    describe('create comment', () => {
        it('return comment created', async () => {
            expect(await controllerCreateComment.createComment(body)).toEqual({

                "id": 1,
                "idPost": 1,
                "idUser": 1,
                "comment": "comentario criado com sucesso"

            })
        })
    })
})

