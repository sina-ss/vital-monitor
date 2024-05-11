import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VitalMonitorModule } from './vital-monitor/vital-monitor.module';

@Module({
  imports: [VitalMonitorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
