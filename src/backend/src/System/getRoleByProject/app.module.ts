import { Module } from '@nestjs/common';
import { controllerGetRoleByProject } from './app.controller';
import { getRoleByProject } from './app.service';
import { PrismaService } from '../../prismaServices/prisma.service';
import { modelModule } from 'src/models/app.module';

@Module({
    imports: [modelModule],
    controllers: [controllerGetRoleByProject],
    providers: [getRoleByProject],
    exports: [getRoleByProject]
})
export class moduleGetRoleByProject { }
