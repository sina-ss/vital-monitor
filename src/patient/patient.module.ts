import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';

@Module({
  controllers: [PatientController],
  providers: [PatientService, PrismaClient],
})
export class PatientModule {}
