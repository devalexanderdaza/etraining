import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findByEmail(email: string) {
    return await this.prismaService.user.findFirst({
      where: { email },
      include: { role: true },
    });
  }

  async create(createUserDto: UserDto) {
    const role = await this.prismaService.role.findFirst({
      where: { name: createUserDto.role },
    });

    return this.prismaService.user.create({
      data: { ...createUserDto, role: { connect: { id: role.id } } },
    });
  }

  findAll() {
    return this.prismaService.user.findMany({
      include: { role: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
      include: { role: true },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const role = await this.prismaService.role.findFirst({
      where: { name: updateUserDto.role },
    });

    return this.prismaService.user.update({
      where: { id },
      data: { ...updateUserDto, role: { connect: { id: role.id } } },
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
