import { Test, TestingModule } from '@nestjs/testing';
import { VoiceRoomsController } from './voice-rooms.controller';
import { VoiceRoomsService } from './voice-rooms.service';

describe('VoiceRoomsController', () => {
  let controller: VoiceRoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoiceRoomsController],
      providers: [VoiceRoomsService],
    }).compile();

    controller = module.get<VoiceRoomsController>(VoiceRoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
