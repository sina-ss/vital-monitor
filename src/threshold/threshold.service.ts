import { Injectable } from '@nestjs/common';
import { PrismaClient, Threshold } from '@prisma/client';

@Injectable()
export class ThresholdService {
  constructor(private prisma: PrismaClient) {}

  async findAll() {
    return this.prisma.threshold.findMany();
  }

  async findOne(id: number) {
    return this.prisma.threshold.findUnique({
      where: { id },
    });
  }

  async create(data: Omit<Threshold, 'id'>) {
    return this.prisma.threshold.create({
      data,
    });
  }

  async update(id: number, data: Partial<Threshold>) {
    return this.prisma.threshold.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.threshold.delete({
      where: { id },
    });
  }
}