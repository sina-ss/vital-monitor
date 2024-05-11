import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VitalMonitorModule } from './vital-monitor/vital-monitor.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [VitalMonitorModule, DoctorModule, PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
