import { Module } from "@nestjs/common";
import { modelModule } from "src/models/app.module";
import { ControllerGetLikedPost } from "./app.controller";
import { ServiceGetLikedPost } from "./app.service";


@Module({
    imports: [modelModule],
    controllers: [ControllerGetLikedPost],
    providers: [ServiceGetLikedPost],
    exports: [ServiceGetLikedPost],
})
export class GetLikedPost { }