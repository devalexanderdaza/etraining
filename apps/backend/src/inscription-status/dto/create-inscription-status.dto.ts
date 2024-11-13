import { IsString } from 'class-validator';

export class CreateInscriptionStatusDto {
  @IsString()
  name: string;
}
