import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { VitalMonitorController } from './vital-monitor.controller';
import { VitalMonitorService } from './vital-monitor.service';

@Module({
  controllers: [VitalMonitorController],
  providers: [VitalMonitorService, PrismaClient],
})
export class VitalMonitorModule {}
