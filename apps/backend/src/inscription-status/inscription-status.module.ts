import { Module } from '@nestjs/common';
import { InscriptionStatusService } from './inscription-status.service';
import { InscriptionStatusController } from './inscription-status.controller';

@Module({
  controllers: [InscriptionStatusController],
  providers: [InscriptionStatusService],
})
export class InscriptionStatusModule {}
