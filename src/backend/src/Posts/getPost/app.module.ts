import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetComments } from './app.controller';
import { ServiceGetPosts } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetComments],
    providers: [ServiceGetPosts],
    exports: [ServiceGetPosts],
})
export class GetPostsModule {}
