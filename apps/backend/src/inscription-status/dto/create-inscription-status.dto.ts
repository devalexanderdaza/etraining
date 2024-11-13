import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInscriptionStatusDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
