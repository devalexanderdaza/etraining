import { Transform, Type } from 'class-transformer';
import { IsEmail, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Role } from '../../core/enums/role.enum';

export class UserDto {
  @IsString()
  @Transform(({ value }) => value.toUpperCase())
  first_name: string;

  @IsString()
  @Transform(({ value }) => value.toUpperCase())
  last_name: string;

  @IsEmail()
  @Transform(({ value }) => value.trim().toLowerCase())
  email: string;

  @IsString()
  @Transform(({ value }) => {
    // Remove all non-numeric characters
    return value
      .trim()
      .toLowerCase()
      .replace(/[^0-9]/g, '');
  })
  phone: string;

  @IsOptional()
  @Type(() => Date)
  @IsString()
  verified_email_at?: Date;

  @IsEnum(Role)
  role: string;
}

export class CreateUserDto extends UserDto {
  @IsNumber()
  @Type(() => Number)
  course_id: number;
}
