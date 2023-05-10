import { Module } from '@nestjs/common';
import { CreatePostModule } from './createPost/app.module';
import { DeleteProject } from './deletePost/app.module';
import { GetSavedProjects } from './getSavedPost/app.module';
import { SaveProjectModule } from './likePost/app.module';

@Module({
    imports: [
        CreatePostModule,
        SaveProjectModule,
        GetSavedProjects,
        DeleteProject,
    ],
    exports: [
        CreatePostModule,
        SaveProjectModule,
        GetSavedProjects,
        DeleteProject,
    ],
})
export class PostModule {}
