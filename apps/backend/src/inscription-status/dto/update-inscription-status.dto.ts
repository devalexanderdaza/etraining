import { PartialType } from '@nestjs/swagger';
import { CreateInscriptionStatusDto } from './create-inscription-status.dto';

export class UpdateInscriptionStatusDto extends PartialType(
  CreateInscriptionStatusDto,
) {}
