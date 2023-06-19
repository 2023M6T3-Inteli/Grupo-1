import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetAllTags } from './app.controller';
import { ServiceGetAllTags } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetAllTags],
    providers: [ServiceGetAllTags],
    exports: [ServiceGetAllTags],
})
export class GetAllTagsModule {}
