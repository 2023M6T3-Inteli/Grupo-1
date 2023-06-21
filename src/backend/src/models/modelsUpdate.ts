import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Tproject } from '../Project/createProject/types/TmodelCreate';
import { PrismaService } from '../prismaServices/prisma.service';
import { Tpost } from 'src/Posts/createPost/types/TmodelCreate';

@Injectable()
export class ModelUpdate {
    constructor(private prisma: PrismaService) {}

    async updateProjectStatus(progress: string, idProject: number) {
        try {
            const result = await this.prisma.project.update({
                data: {
                    status: progress,
                },
                where: {
                    id: idProject,
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

    async updateApprovalProject(isApproved: boolean, idProject: number) {
        try {
            const result = await this.prisma.project.update({
                data: {
                    isApproved: isApproved,
                },
                where: {
                    id: idProject,
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

    async updateProjectRankPoints(data: Tproject) {
        const {
            name,
            description,
            aplicationDeadLine,
            dateStart,
            duration,
            status,
            idUser,
            idManager,
        } = data;
        try {
            const result = await this.prisma.user.update({
                data: {
                    rankPoints: +15,
                },
                where: {
                    id: idUser,
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
    async updateApplyProjectRankPoints(idProject: number) {
        try {
            const user = await this.prisma.project.findUnique({
                where: { id: idProject },
                select: { User: true },
            });

            if (!user) {
                throw new HttpException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        error: 'User not found',
                    },
                    HttpStatus.NOT_FOUND,
                );
            }

            const result = await this.prisma.user.update({
                data: {
                    rankPoints: user.User.rankPoints + 2,
                },
                where: {
                    id: user.User.id,
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

    async updatePostRankPoints(data: Tpost) {
        const { idUser } = data;
        try {
            const user = await this.prisma.user.findUnique({
                where: { id: idUser },
            });

            if (!user) {
                throw new HttpException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        error: 'User not found',
                    },
                    HttpStatus.NOT_FOUND,
                );
            }

            const result = await this.prisma.user.update({
                data: {
                    rankPoints: user.rankPoints + 10,
                },
                where: {
                    id: idUser,
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
    async updateLikeRankPoints(idPost: number) {
        try {
            const user = await this.prisma.post.findUnique({
                where: { id: idPost },
                select: { User: true },
            });

            if (!user) {
                throw new HttpException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        error: 'User not found',
                    },
                    HttpStatus.NOT_FOUND,
                );
            }

            const result = await this.prisma.user.update({
                data: {
                    rankPoints: user.User.rankPoints + 5,
                },
                where: {
                    id: user.User.id,
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

    async updateNotifications(id: number) {
        try {
            const result = await this.prisma.notifications.update({
                data: {
                    newNotification: false,
                },
                where: {
                    id: id,
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

    async updateCommentRankPoints(idPost: number) {
        try {
            const user = await this.prisma.post.findUnique({
                where: { id: idPost },
                select: { User: true },
            });

            if (!user) {
                throw new HttpException(
                    {
                        status: HttpStatus.NOT_FOUND,
                        error: 'User not found',
                    },
                    HttpStatus.NOT_FOUND,
                );
            }

            const result = await this.prisma.user.update({
                data: {
                    rankPoints: user.User.rankPoints + 15,
                },
                where: {
                    id: user.User.id,
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
}

