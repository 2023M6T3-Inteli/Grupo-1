import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetComments } from './app.controller';
import { ServiceGetComments } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetComments],
    providers: [ServiceGetComments],
    exports: [ServiceGetComments],
})
export class GetCommentsModule {}
