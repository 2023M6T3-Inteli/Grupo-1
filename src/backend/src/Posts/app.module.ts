import { Module } from '@nestjs/common';
import { CreatePostModule } from './createPost/app.module';
import { DeletePost } from './deletePost/app.module';
import { LikePostModule } from './likePost/app.module';
import { GetPostsModule } from './getPost/app.module';
import { GetPostsByIdModule } from './getPostById/app.module';

@Module({
    imports: [
        CreatePostModule,
        LikePostModule,
        DeletePost,
        GetPostsModule,
        GetPostsByIdModule,
    ],
    exports: [
        CreatePostModule,
        LikePostModule,
        DeletePost,
        GetPostsModule,
        GetPostsByIdModule,
    ],
})
export class PostModule {}
