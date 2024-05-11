import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { VitalSignController } from './vital-sign.controller';
import { VitalSignService } from './vital-sign.service';

@Module({
  controllers: [VitalSignController],
  providers: [VitalSignService, PrismaClient],
})
export class VitalSignModule {}