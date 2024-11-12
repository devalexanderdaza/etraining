import { Injectable } from '@nestjs/common';
import { CreateInscriptionStatusDto } from './dto/create-inscription-status.dto';
import { UpdateInscriptionStatusDto } from './dto/update-inscription-status.dto';

@Injectable()
export class InscriptionStatusService {
  create(createInscriptionStatusDto: CreateInscriptionStatusDto) {
    return 'This action adds a new inscriptionStatus';
  }

  findAll() {
    return `This action returns all inscriptionStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inscriptionStatus`;
  }

  update(id: number, updateInscriptionStatusDto: UpdateInscriptionStatusDto) {
    return `This action updates a #${id} inscriptionStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} inscriptionStatus`;
  }
}
