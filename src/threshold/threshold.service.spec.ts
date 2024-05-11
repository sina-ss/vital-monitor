import { Test, TestingModule } from '@nestjs/testing';
import { ThresholdService } from './threshold.service';

describe('ThresholdService', () => {
  let service: ThresholdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThresholdService],
    }).compile();

    service = module.get<ThresholdService>(ThresholdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
