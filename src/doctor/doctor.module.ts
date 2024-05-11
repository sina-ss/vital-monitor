import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';

@Module({
  controllers: [DoctorController],
  providers: [DoctorService, PrismaClient],
})
export class DoctorModule {}
