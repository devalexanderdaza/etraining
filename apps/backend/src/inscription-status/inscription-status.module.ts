import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InscriptionStatus } from './entities/inscription-status.entity';
import { InscriptionStatusController } from './inscription-status.controller';
import { InscriptionStatusService } from './inscription-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([InscriptionStatus])],
  controllers: [InscriptionStatusController],
  providers: [InscriptionStatusService],
})
export class InscriptionStatusModule {}
