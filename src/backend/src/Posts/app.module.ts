import { Get, Module } from '@nestjs/common';
import { CreatePostModule } from './createPost/app.module';
import { DeletePost } from './deletePost/app.module';
import { LikePostModule } from './likePost/app.module';
import { GetPostsModule } from './getPost/app.module';
import { GetPostsByIdModule } from './getPostById/app.module';
import { GetLikedPost } from './getLikedPost/app.module';
import { DeleteLikedPost } from './deleteLikedPost/app.module';

@Module({
    imports: [
        CreatePostModule,
        LikePostModule,
        DeletePost,
        DeleteLikedPost,
        GetPostsModule,
        GetPostsByIdModule,
        GetLikedPost,
    ],
    exports: [
        CreatePostModule,
        LikePostModule,
        DeletePost,
        DeleteLikedPost,
        GetPostsModule,
        GetPostsByIdModule,
        GetLikedPost,
    ],
})
export class PostModule {}
