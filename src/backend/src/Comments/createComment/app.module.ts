import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerCreateComment } from './app.controller';
import { ServiceCreateComment } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerCreateComment],
    providers: [ServiceCreateComment],
    exports: [ServiceCreateComment],
})
export class CreateCommentModule {}
