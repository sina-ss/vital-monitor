import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AlertController } from './alert.controller';
import { AlertService } from './alert.service';
import { SmsService } from 'src/sms/sms.service';

@Module({
  controllers: [AlertController],
  providers: [AlertService, PrismaClient, SmsService],
})
export class AlertModule {}