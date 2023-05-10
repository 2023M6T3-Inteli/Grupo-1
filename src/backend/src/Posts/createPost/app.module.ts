import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerCreatePost } from './app.controller';
import { ServiceCreatePost } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerCreatePost],
    providers: [ServiceCreatePost],
    exports: [ServiceCreatePost],
})
export class CreatePostModule { }
