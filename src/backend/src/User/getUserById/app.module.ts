import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetUserById } from './app.controller';
import { ServiceGetUserById } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetUserById],
    providers: [ServiceGetUserById],
    exports: [ServiceGetUserById],
})
export class GetUserByIdModule {}
