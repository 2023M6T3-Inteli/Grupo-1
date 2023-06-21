import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerUpdateNotifications } from './app.controller';
import { ServiceUpdateNotifications } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerUpdateNotifications],
    providers: [ServiceUpdateNotifications],
    exports: [ServiceUpdateNotifications],
})
export class UpdateNotificationsModule {}
