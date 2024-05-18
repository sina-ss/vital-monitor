import { Injectable } from '@nestjs/common';
import { Alert, PrismaClient } from '@prisma/client';
import { SmsService } from 'src/sms/sms.service';

@Injectable()
export class AlertService {
  constructor(
    private prisma: PrismaClient,
    private smsService: SmsService,
  ) {}

  async findAll() {
    return this.prisma.alert.findMany();
  }

  async findOne(id: number) {
    return this.prisma.alert.findUnique({
      where: { id },
    });
  }

  async create(data: Omit<Alert, 'id'>) {
    const alert = await this.prisma.alert.create({ data });

    const patient = await this.prisma.patient.findUnique({
      where: { id: alert.patientId },
    });

    const doctor = await this.prisma.doctor.findUnique({
      where: { id: alert.doctorId },
    });

    const recipients = [
      patient.phoneNumber,
      doctor.phoneNumber,
      patient.emergencyContactPhone,
    ];

    const patientName = `${patient.firstName} ${patient.lastName}`;
    const doctorName = `${doctor.firstName} ${doctor.lastName}`;

    await this.smsService.sendAlert(alert, recipients, patientName, doctorName);

    return alert;
  }

  async update(id: number, data: Partial<Alert>) {
    return this.prisma.alert.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.alert.delete({
      where: { id },
    });
  }
}
