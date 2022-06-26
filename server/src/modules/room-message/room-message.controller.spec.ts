import { Test, TestingModule } from '@nestjs/testing';
import { RoomMessageController } from './room-message.controller';
import { RoomMessageService } from './room-message.service';

describe('RoomMessageController', () => {
  let controller: RoomMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomMessageController],
      providers: [RoomMessageService],
    }).compile();

    controller = module.get<RoomMessageController>(RoomMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
