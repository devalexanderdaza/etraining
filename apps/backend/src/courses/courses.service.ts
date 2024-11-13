import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    return await this.courseRepository.save(createCourseDto);
  }

  async findAll() {
    return await this.courseRepository.find();
  }

  async findOne(id: number) {
    return await this.courseRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    return await this.courseRepository.update(id, updateCourseDto);
  }

  async remove(id: number) {
    return await this.courseRepository.delete(id);
  }
}
