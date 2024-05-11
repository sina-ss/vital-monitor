import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ThresholdController } from './threshold.controller';
import { ThresholdService } from './threshold.service';

@Module({
  controllers: [ThresholdController],
  providers: [ThresholdService, PrismaClient],
})
export class ThresholdModule {}