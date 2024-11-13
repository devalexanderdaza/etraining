import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateUserCourseDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  userId: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  courseId: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  inscriptionStatusId: number;
}
