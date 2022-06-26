import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import dbConnection from './db.module';
import { AppGateway } from './app.gateway';
import { MeModule } from './modules/@me/@me.module';

@Module({
    imports: [dbConnection, UserModule, AuthModule, MeModule],
    controllers: [],
    providers: [AppGateway],
})
export class AppModule {}
