import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import dbConnection from './db.module';
import { AppGateway } from './app.gateway';
import { MeModule } from './modules/@me/@me.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        dbConnection,
        UserModule,
        AuthModule,
        MeModule,
    ],
    controllers: [],
    providers: [AppGateway],
})
export class AppModule {}
