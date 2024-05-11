import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from '@prisma/client';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Omit<Patient, 'id'>) {
    return this.patientService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<Patient>) {
    return this.patientService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(Number(id));
  }
}
