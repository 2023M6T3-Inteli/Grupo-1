import { Module } from '@nestjs/common';
import { GetAllProjectModule } from './getAllProjects/app.module';
import { GetProjectByIdModule } from './getProjectById/app.module';
import { GetProjectForTagModule } from './getProjectForTag/app.module';
import { GetRankingModule } from './getRanking/app.module';
import { GetRankingUserModule } from './getRankById/app.module';
import { HealthModule } from './health/app.module';
import { GetAllTagsModule } from './getAllTags/app.module';
import { GetAllRolesModule } from './getAllRoles/app.module';
import { moduleGetRoleByProject } from './getRoleByProject/app.module';

@Module({
    imports: [
        GetProjectForTagModule,
        GetProjectByIdModule,
        GetAllProjectModule,
        HealthModule,
        GetRankingModule,
        GetRankingUserModule,
        GetAllTagsModule,
        GetAllRolesModule,
        moduleGetRoleByProject
    ],
    exports: [
        GetProjectForTagModule,
        GetProjectByIdModule,
        GetAllProjectModule,
        HealthModule,
        GetRankingModule,
        GetRankingUserModule,
        GetAllTagsModule,
        moduleGetRoleByProject
    ],
})
export class SystemModule { }
