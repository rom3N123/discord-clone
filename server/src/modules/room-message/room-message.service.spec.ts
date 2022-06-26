import { Test, TestingModule } from '@nestjs/testing';
import { RoomMessageService } from './room-message.service';

describe('RoomMessageService', () => {
  let service: RoomMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomMessageService],
    }).compile();

    service = module.get<RoomMessageService>(RoomMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
