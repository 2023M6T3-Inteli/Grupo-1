import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetPosts } from './app.controller';
import { ServiceGetPosts } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetPosts],
    providers: [ServiceGetPosts],
    exports: [ServiceGetPosts],
})
export class GetPostsModule {}
