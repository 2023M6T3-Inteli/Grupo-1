import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { parseISO } from 'date-fns';
import { Tproject } from '../Project/createProject/types/TmodelCreate';
import { Tpost } from '../Posts/createPost/types/TmodelCreate';

import { PrismaService } from '../prismaServices/prisma.service';

@Injectable()
export class ModelCreate {
    constructor(private readonly prisma: PrismaService) {}

    async createProject(data: Tproject) {

        // const {
        //     name,
        //     description,
        //     aplicationDeadLine,
        //     dateStart,
        //     duration,
        //     status,
        //     idUser,
        //     idManager,
        // } = data;

        try {

            console.log(data)

            const deadlineTime = data.aplicationDeadLine
            const dateStartTime = data.dateStart

            const result = await this.prisma.project.create({
                data: {
                    name: data.name,
                    description: data.description,
                    aplicationDeadLine: new Date(),
                    dateStart: new Date(),
                    duration: data.duration,
                    status: data.status,

                    idUser: data.idUser,
                    idManager: data.idManager,
                },
            });

            return result;
        } catch (error) {
            console.log(error)
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }
    async createPost(data: Tpost) {
        const { media, description, idUser } = data;

        try {
            const result = await this.prisma.post.create({
                data: {
                    media: media,
                    description: description,
                    idUser: idUser,
                },
            });

            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }
    async createComment(idUser: number, idPost: number, comment: string) {
        try {
            const result = await this.prisma.comments.create({
                data: {
                    idUser: idUser,
                    idPost: idPost,
                    comment: comment,
                },
            });

            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async createProjectNotification(idProject: number, description: string) {
        try {
            const user = await this.prisma.project.findUnique({
                where: { id: idProject },
                select: { User: true },
            });
            const result = await this.prisma.notifications.create({
                data: {
                    idUser: user.User.id,
                    description: description,
                    newNotification: true,
                },
            });

            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async createPostNotification(idPost: number, description: string) {
        try {
            const user = await this.prisma.post.findUnique({
                where: { id: idPost },
                select: { User: true },
            });
            const result = await this.prisma.notifications.create({
                data: {
                    idUser: user.User.id,
                    description: description,
                    newNotification: true,
                },
            });

            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async connectTagsProject(idProject: number, idTag: number) {
        try {
            const result = await this.prisma.projectTag.create({
                data: {
                    idProject: idProject,
                    idTag: idTag,
                },
            });
            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async connectTagsPost(idPost: number, idTag: number) {
        try {
            const result = await this.prisma.postTag.create({
                data: {
                    idPost: idPost,
                    idTag: idTag,
                },
            });
            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async connectRolesProject(idProject: number, idRole: number) {
        try {
            const result = await this.prisma.projectRole.create({
                data: {
                    idProject: idProject,
                    idRole: idRole,
                },
            });
            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async saveProject(idProject: number, idUser: number) {
        try {
            const result = await this.prisma.saveProject.create({
                data: {
                    idProject: idProject,
                    idUser: idUser,
                },
            });
            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }
    async likePost(idPost: number, idUser: number) {
        try {
            const result = await this.prisma.postLike.create({
                data: {
                    idPost: idPost,
                    idUser: idUser,
                },
            });
            return result;
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: error,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    async applyProject(idProject: number, idUser: number, idRole: number) {
        const result = await this.prisma.userApplyProject.create({
            data: {
                idProject: idProject,
                idUser: idUser,
                idRole: idRole,
            },
        });

        return result;
    }
}

