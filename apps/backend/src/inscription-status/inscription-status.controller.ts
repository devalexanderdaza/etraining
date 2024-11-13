import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InscriptionStatusService } from './inscription-status.service';
import { CreateInscriptionStatusDto } from './dto/create-inscription-status.dto';
import { UpdateInscriptionStatusDto } from './dto/update-inscription-status.dto';

@Controller('inscription-status')
export class InscriptionStatusController {
  constructor(private readonly inscriptionStatusService: InscriptionStatusService) {}

  @Post()
  create(@Body() createInscriptionStatusDto: CreateInscriptionStatusDto) {
    return this.inscriptionStatusService.create(createInscriptionStatusDto);
  }

  @Get()
  findAll() {
    return this.inscriptionStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inscriptionStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInscriptionStatusDto: UpdateInscriptionStatusDto) {
    return this.inscriptionStatusService.update(+id, updateInscriptionStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inscriptionStatusService.remove(+id);
  }
}
