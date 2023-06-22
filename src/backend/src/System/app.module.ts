import { Module } from '@nestjs/common';
import { GetAllProjectModule } from './getAllProjects/app.module';
import { GetProjectByIdModule } from './getProjectById/app.module';
import { GetProjectForTagModule } from './getProjectForTag/app.module';
import { GetRankingModule } from './getRanking/app.module';
import { GetRankingUserModule } from './getRankById/app.module';
import { HealthModule } from './health/app.module';
import { GetAllTagsModule } from './getAllTags/app.module';

@Module({
    imports: [
        GetProjectForTagModule,
        GetProjectByIdModule,
        GetAllProjectModule,
        HealthModule,
        GetRankingModule,
        GetRankingUserModule,
        GetAllTagsModule,
    ],
    exports: [
        GetProjectForTagModule,
        GetProjectByIdModule,
        GetAllProjectModule,
        HealthModule,
        GetRankingModule,
        GetRankingUserModule,
        GetAllTagsModule,
    ],
})
export class SystemModule {}
