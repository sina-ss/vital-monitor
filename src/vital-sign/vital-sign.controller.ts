import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VitalSignService } from './vital-sign.service';
import { VitalSign } from '@prisma/client';

@Controller('vital-signs')
export class VitalSignController {
  constructor(private readonly vitalSignService: VitalSignService) {}

  @Get()
  findAll() {
    return this.vitalSignService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vitalSignService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Omit<VitalSign, 'id'>) {
    return this.vitalSignService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<VitalSign>) {
    return this.vitalSignService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vitalSignService.remove(Number(id));
  }
}
