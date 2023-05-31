import { Module } from '@nestjs/common';
import { modelModule } from 'src/models/app.module';
import { ControllerGetRanking } from './app.controller';
import { ServiceGetRanking } from './app.service';

@Module({
    imports: [modelModule],
    controllers: [ControllerGetRanking],
    providers: [ServiceGetRanking],
    exports: [ServiceGetRanking],
})
export class GetRankingModule {}
