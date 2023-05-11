import { Module } from '@nestjs/common';
import { CreatePostModule } from './createPost/app.module';
import { DeleteProject } from './deletePost/app.module';
import { SaveProjectModule } from './likePost/app.module';

@Module({
    imports: [
        CreatePostModule,
        SaveProjectModule,
        DeleteProject,
    ],
    exports: [
        CreatePostModule,
        SaveProjectModule,
        DeleteProject,
    ],
})
export class PostModule {}
