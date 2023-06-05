import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetNotifications } from './app.controller';
import { ServiceGetNotifications } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetNotifications],
    providers: [ServiceGetNotifications],
    exports: [ServiceGetNotifications],
})
export class GetNotificationsModule {}
