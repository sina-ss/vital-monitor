import { Test, TestingModule } from '@nestjs/testing';
import { ThresholdController } from './threshold.controller';

describe('ThresholdController', () => {
  let controller: ThresholdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThresholdController],
    }).compile();

    controller = module.get<ThresholdController>(ThresholdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
