import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VitalMonitorModule } from './vital-monitor/vital-monitor.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { VitalSignModule } from './vital-sign/vital-sign.module';
import { ThresholdModule } from './threshold/threshold.module';
import { AlertService } from './alert/alert.service';
import { AlertController } from './alert/alert.controller';
import { AlertModule } from './alert/alert.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [VitalMonitorModule, DoctorModule, PatientModule, VitalSignModule, ThresholdModule, AlertModule, AuthModule],
  controllers: [AppController, AlertController],
  providers: [AppService, AlertService],
})
export class AppModule {}
