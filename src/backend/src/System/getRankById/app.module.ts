import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetRankingUser } from './app.controller';
import { ServiceGetRankingUser } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetRankingUser],
    providers: [ServiceGetRankingUser],
    exports: [ServiceGetRankingUser],
})
export class GetRankingUserModule {}
