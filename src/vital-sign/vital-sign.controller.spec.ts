import { Test, TestingModule } from '@nestjs/testing';
import { VitalSignController } from './vital-sign.controller';

describe('VitalSignController', () => {
  let controller: VitalSignController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VitalSignController],
    }).compile();

    controller = module.get<VitalSignController>(VitalSignController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
