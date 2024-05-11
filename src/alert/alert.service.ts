import { Injectable } from '@nestjs/common';
import { Alert, PrismaClient } from '@prisma/client';

@Injectable()
export class AlertService {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return this.prisma.alert.findMany();
  }

  async findOne(id: number) {
    return this.prisma.alert.findUnique({
      where: { id },
    });
  }

  async create(data: Omit<Alert, 'id'>) {
    return this.prisma.alert.create({
      data,
    });
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
