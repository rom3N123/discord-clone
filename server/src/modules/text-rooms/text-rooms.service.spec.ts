import { Test, TestingModule } from '@nestjs/testing';
import { TextRoomsService } from './text-rooms.service';

describe('TextRoomsService', () => {
  let service: TextRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextRoomsService],
    }).compile();

    service = module.get<TextRoomsService>(TextRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
