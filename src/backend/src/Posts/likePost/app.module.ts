import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerLikePost } from './app.controller';
import { ServiceLikePost } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerLikePost],
    providers: [ServiceLikePost],
    exports: [ServiceLikePost],
})
export class SaveProjectModule { }