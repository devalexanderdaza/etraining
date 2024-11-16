import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: CreateCourseDto) {
    return this.prismaService.course.create({ data });
  }

  findAll() {
    return this.prismaService.course.findMany({
      include: {
        category: true,
        modality: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.course.findUnique({ where: { id } });
  }

  async findOneByName(name: string) {
    return await this.prismaService.course.findFirst({ where: { name } });
  }

  update(id: number, data: UpdateCourseDto) {
    return this.prismaService.course.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prismaService.course.delete({
      where: { id },
    });
  }
}
