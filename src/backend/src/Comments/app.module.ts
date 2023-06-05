import { Module } from '@nestjs/common';
import { CreateCommentModule } from './createComment/app.module';
import { GetCommentsModule } from './getComments/app.module';

@Module({
    imports: [CreateCommentModule, GetCommentsModule ],
    exports: [CreateCommentModule, GetCommentsModule ],
})
export class CommentsModule {}
