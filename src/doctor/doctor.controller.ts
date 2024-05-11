import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from '@prisma/client';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Omit<Doctor, 'id'>) {
    return this.doctorService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<Doctor>) {
    return this.doctorService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorService.remove(Number(id));
  }
}
