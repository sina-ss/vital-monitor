import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AlertService } from './alert.service';
import { Alert } from '@prisma/client';

@Controller('alerts')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Get()
  findAll() {
    return this.alertService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alertService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: Omit<Alert, 'id'>) {
    return this.alertService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<Alert>) {
    return this.alertService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alertService.remove(Number(id));
  }
}
