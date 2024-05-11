import { Injectable } from '@nestjs/common';
import { Doctor, PrismaClient } from '@prisma/client';

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return this.prisma.doctor.findMany();
  }

  async findOne(id: number) {
    return this.prisma.doctor.findUnique({
      where: { id },
    });
  }

  async create(data: Omit<Doctor, 'id'>) {
    return this.prisma.doctor.create({
      data,
    });
  }

  async update(id: number, data: Partial<Doctor>) {
    return this.prisma.doctor.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.doctor.delete({
      where: { id },
    });
  }
}
