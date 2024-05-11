import { Injectable } from '@nestjs/common';
import { PrismaClient, VitalSign } from '@prisma/client';

@Injectable()
export class VitalSignService {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return this.prisma.vitalSign.findMany();
  }

  async findOne(id: number) {
    return this.prisma.vitalSign.findUnique({
      where: { id },
    });
  }

  async create(data: Omit<VitalSign, 'id'>) {
    return this.prisma.vitalSign.create({
      data,
    });
  }

  async update(id: number, data: Partial<VitalSign>) {
    return this.prisma.vitalSign.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.vitalSign.delete({
      where: { id },
    });
  }
}
