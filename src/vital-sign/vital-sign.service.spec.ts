import { Test, TestingModule } from '@nestjs/testing';
import { VitalSignService } from './vital-sign.service';

describe('VitalSignService', () => {
  let service: VitalSignService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VitalSignService],
    }).compile();

    service = module.get<VitalSignService>(VitalSignService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
