import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetPostById } from './app.controller';
import { ServiceGetPostsByUserId } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetPostById],
    providers: [ServiceGetPostsByUserId],
    exports: [ServiceGetPostsByUserId],
})
export class GetPostsByIdModule {}
