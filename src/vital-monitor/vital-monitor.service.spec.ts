import { Test, TestingModule } from '@nestjs/testing';
import { VitalMonitorService } from './vital-monitor.service';

describe('VitalMonitorService', () => {
  let service: VitalMonitorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VitalMonitorService],
    }).compile();

    service = module.get<VitalMonitorService>(VitalMonitorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
