import { PartialType } from '@nestjs/mapped-types';
import { CreateInscriptionStatusDto } from './create-inscription-status.dto';

export class UpdateInscriptionStatusDto extends PartialType(CreateInscriptionStatusDto) {}
