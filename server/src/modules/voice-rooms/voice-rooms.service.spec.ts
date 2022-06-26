import { Test, TestingModule } from '@nestjs/testing';
import { VoiceRoomsService } from './voice-rooms.service';

describe('VoiceRoomsService', () => {
  let service: VoiceRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoiceRoomsService],
    }).compile();

    service = module.get<VoiceRoomsService>(VoiceRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
