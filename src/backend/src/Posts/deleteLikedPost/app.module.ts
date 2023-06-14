import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerDeleteLikedPost } from './app.controller';
import { ServicesDeleteLikedPost } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerDeleteLikedPost],
    providers: [ServicesDeleteLikedPost],
    exports: [ServicesDeleteLikedPost],
})
export class DeleteLikedPost {}
