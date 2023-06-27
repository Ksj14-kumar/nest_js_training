import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { UserModule } from './user/user.module';
// import { UserModule } fro./_user/user.moduleule"


@Module({
    imports: [UserModule],
    controllers: [AppController]
})

export class AppModule { }