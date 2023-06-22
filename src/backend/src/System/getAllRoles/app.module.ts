import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetAllRoles } from './app.controller';
import { ServiceGetAllRoles } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetAllRoles],
    providers: [ServiceGetAllRoles],
    exports: [ServiceGetAllRoles],
})
export class GetAllRolesModule { }
