import { IsString } from 'class-validator';

export class CreateModalityDto {
  @IsString()
  name: string;
}
