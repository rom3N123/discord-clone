import { Test, TestingModule } from '@nestjs/testing';
import { TextRoomsController } from './text-rooms.controller';
import { TextRoomsService } from './text-rooms.service';

describe('TextRoomsController', () => {
  let controller: TextRoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextRoomsController],
      providers: [TextRoomsService],
    }).compile();

    controller = module.get<TextRoomsController>(TextRoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
