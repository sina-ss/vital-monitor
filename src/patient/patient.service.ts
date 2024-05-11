import { Injectable } from '@nestjs/common';
import { Patient, PrismaClient } from '@prisma/client';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return this.prisma.patient.findMany();
  }

  async findOne(id: number) {
    return this.prisma.patient.findUnique({
      where: { id },
      include: { profile: true },
    });
  }

  async create(data: Omit<Patient, 'id'>) {
    return this.prisma.patient.create({
      data,
    });
  }

  async update(id: number, data: Partial<Patient>) {
    return this.prisma.patient.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.patient.delete({
      where: { id },
    });
  }
}
