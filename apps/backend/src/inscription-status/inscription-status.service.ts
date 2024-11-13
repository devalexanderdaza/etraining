import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInscriptionStatusDto } from './dto/create-inscription-status.dto';
import { UpdateInscriptionStatusDto } from './dto/update-inscription-status.dto';
import { InscriptionStatus } from './entities/inscription-status.entity';

@Injectable()
export class InscriptionStatusService {
  constructor(
    @InjectRepository(InscriptionStatus)
    private inscriptionStatusRepository: Repository<InscriptionStatus>,
  ) {}

  async create(createInscriptionStatusDto: CreateInscriptionStatusDto) {
    return await this.inscriptionStatusRepository.save(
      createInscriptionStatusDto,
    );
  }

  async findAll() {
    return await this.inscriptionStatusRepository.find();
  }

  async findOne(id: number) {
    return await this.inscriptionStatusRepository.findOne({
      where: { id },
    });
  }

  async update(
    id: number,
    updateInscriptionStatusDto: UpdateInscriptionStatusDto,
  ) {
    return await this.inscriptionStatusRepository.update(
      { id },
      updateInscriptionStatusDto,
    );
  }

  async remove(id: number) {
    return await this.inscriptionStatusRepository.delete({ id });
  }
}
