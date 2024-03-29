import { Module } from '@nestjs/common';

import { ModelDelete } from './models/modelDelete';
import { ModelCreate } from './models/modelCreate';
import { ModelUpdate } from './models/modelsUpdate';
import { ModelSelect } from './models/modelSelect';

import { ProjectModule } from './Project/app.module';
import { UserLeaderModule } from './UserLeader/app.module';
import { SystemModule } from './System/app.module';
import { OwnerModule } from './Owner/app.module';
import { UserModule } from './User/app.module';
import { PostModule } from './Posts/app.module';
import { CommentsModule } from './Comments/app.module';
import { GetNotificationsModule } from './User/getNotifications/app.module';
import { GetAllNotificationsModule } from './User/getAllNotifications/app.module';
import { UpdateNotificationsModule } from './User/updateNotifications/app.module';

@Module({
    imports: [
        CommentsModule,
        PostModule,
        ProjectModule,
        UserLeaderModule,
        UserModule,
        SystemModule,
        OwnerModule,
        GetNotificationsModule,
        GetAllNotificationsModule,
        UpdateNotificationsModule
    ],
})
export class AppModule {}
