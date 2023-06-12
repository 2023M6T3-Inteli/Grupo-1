import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetAllNotifications } from './app.controller';
import { ServiceGetAllNotifications } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetAllNotifications],
    providers: [ServiceGetAllNotifications],
    exports: [ServiceGetAllNotifications],
})
export class GetAllNotificationsModule {}
