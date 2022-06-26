import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { TextRoomsModule } from './modules/text-rooms/text-rooms.module';
import { VoiceRoomsModule } from './modules/voice-rooms/voice-rooms.module';
import { RoomMessageModule } from './modules/room-message/room-message.module';
import dbConnection from './db.module';
import { AppGateway } from './app.gateway';
import { MeModule } from './modules/@me/@me.module';

@Module({
  imports: [
    dbConnection,
    UserModule,
    AuthModule,
    TextRoomsModule,
    VoiceRoomsModule,
    RoomMessageModule,
    MeModule,
  ],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
