import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ThresholdService } from './threshold.service';
import { Threshold } from '@prisma/client';

@Controller('thresholds')
export class ThresholdController {
  constructor(private readonly thresholdService: ThresholdService) {}

  @Get()
  findAll() {
    return this.thresholdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thresholdService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Omit<Threshold, 'id'>) {
    return this.thresholdService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<Threshold>) {
    return this.thresholdService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thresholdService.remove(Number(id));
  }
}