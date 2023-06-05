import { Module } from '@nestjs/common';
import { applyProject } from './ApplyProject/app.module';
import { AuthModule } from './auth/app.module';
import { UnApplyUserModule } from './unApplyUser/app.module';
import { GetProjectsApplied } from './projectsApplied/app.module';
import { GetUserByIdModule } from './getUserById/app.module';

@Module({
    imports: [UnApplyUserModule, applyProject, AuthModule, GetProjectsApplied,GetUserByIdModule],
    exports: [UnApplyUserModule, applyProject, AuthModule, GetProjectsApplied,GetUserByIdModule],
})
export class UserModule {}
