import { Test, TestingModule } from '@nestjs/testing';
import { VitalMonitorController } from './vital-monitor.controller';

describe('VitalMonitorController', () => {
  let controller: VitalMonitorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VitalMonitorController],
    }).compile();

    controller = module.get<VitalMonitorController>(VitalMonitorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
