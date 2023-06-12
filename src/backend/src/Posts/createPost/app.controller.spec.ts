import { PrismaService } from "../../prismaServices/prisma.service";
import { ServiceCreatePost } from "./app.service";
import { ControllerCreatePost } from "./app.controller";
import { DTOBodyCreatePost } from "./DTO/DTOCreatePost";
import { ModelCreate } from "../../models/modelCreate";
import { ModelSelect } from "../../models/modelSelect";
import { ModelUpdate } from "../../models/modelsUpdate";

describe('create comment', () => {
    let prisma: PrismaService
    let modelCreate: ModelCreate
    let modelUpdate: ModelUpdate
    let modelSelect: ModelSelect
    let serviceCreatePost: ServiceCreatePost
    let controllerCreatePost: ControllerCreatePost
    let body: DTOBodyCreatePost = {
        description: "Como fazer teste com JEST",
        media: "https://www.youtube.com/watch?v=uRTKUjeua3g",
        idUser: 1,
        idTag: [1]
    }

    beforeEach(() => {
        prisma = new PrismaService()
        modelCreate = new ModelCreate(prisma)
        modelUpdate = new ModelUpdate(prisma)
        modelSelect = new ModelSelect(prisma)
        serviceCreatePost = new ServiceCreatePost(modelCreate, modelSelect, modelUpdate)
        controllerCreatePost = new ControllerCreatePost(serviceCreatePost)
    })

    describe('create comment', () => {
        it('return comment created', async () => {
            expect(await controllerCreatePost.createPost(body)).toEqual({

                "description": "Como fazer teste com JEST",
                "media": "https://www.youtube.com/watch?v=uRTKUjeua3g",
                "idUser": 1,
                "id": 5
            })
        })
    })
})

