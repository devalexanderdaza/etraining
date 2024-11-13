import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModalityDto } from './dto/create-modality.dto';
import { UpdateModalityDto } from './dto/update-modality.dto';
import { Modality } from './entities/modality.entity';

@Injectable()
export class ModalitiesService {
  constructor(
    @InjectRepository(Modality)
    private modalityRepository: Repository<Modality>,
  ) {}

  async create(createModalityDto: CreateModalityDto) {
    return await this.modalityRepository.save(createModalityDto);
  }

  async findAll() {
    return await this.modalityRepository.find();
  }

  async findOne(id: number) {
    return await this.modalityRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateModalityDto: UpdateModalityDto) {
    return await this.modalityRepository.update({ id }, updateModalityDto);
  }

  async remove(id: number) {
    return await this.modalityRepository.delete({ id });
  }
}
