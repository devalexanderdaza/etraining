import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateModalityDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
