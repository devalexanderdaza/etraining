import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modality } from './entities/modality.entity';
import { ModalitiesController } from './modalities.controller';
import { ModalitiesService } from './modalities.service';

@Module({
  imports: [TypeOrmModule.forFeature([Modality])],
  controllers: [ModalitiesController],
  providers: [ModalitiesService],
})
export class ModalitiesModule {}
