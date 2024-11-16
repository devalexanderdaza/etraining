import { Injectable } from '@nestjs/common';
import { CoursesRepository } from './courses.repository';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(private readonly coursesRepository: CoursesRepository) {}

  create(createCourseDto: CreateCourseDto) {
    return this.coursesRepository.create(createCourseDto);
  }

  findAll() {
    return this.coursesRepository.findAll();
  }

  findOne(id: number) {
    return this.coursesRepository.findOne(id);
  }

  async findOneByName(name: string) {
    return await this.coursesRepository.findOneByName(name);
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.coursesRepository.update(id, updateCourseDto);
  }

  remove(id: number) {
    return this.coursesRepository.remove(id);
  }
}
