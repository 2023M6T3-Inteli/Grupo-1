import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerDeletePost } from './app.controller';
import { ServicesDeletePost } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerDeletePost],
    providers: [ServicesDeletePost],
    exports: [ServicesDeletePost],
})
export class DeletePost {}
