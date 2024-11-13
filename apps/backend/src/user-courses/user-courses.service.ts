import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursesService } from 'src/courses/courses.service';
import { InscriptionStatusService } from 'src/inscription-status/inscription-status.service';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { CreateUserCourseDto } from './dto/create-user-course.dto';
import { UpdateUserCourseDto } from './dto/update-user-course.dto';
import { UserCourse } from './entities/user-course.entity';

@Injectable()
export class UserCoursesService {
  constructor(
    @InjectRepository(UserCourse)
    private userCourseRepository: Repository<UserCourse>,
    private readonly userService: UsersService,
    private readonly courseService: CoursesService,
    private readonly inscriptionStatusService: InscriptionStatusService,
  ) {}

  async create(createUserCourseDto: CreateUserCourseDto) {
    const user = await this.userService.findOne(createUserCourseDto.userId);
    if (!user) {
      throw new Error('User not found');
    }

    const course = await this.courseService.findOne(
      createUserCourseDto.courseId,
    );
    if (!course) {
      throw new Error('Course not found');
    }

    const inscriptionStatus = await this.inscriptionStatusService.findOne(
      createUserCourseDto.inscriptionStatusId,
    );
    if (!inscriptionStatus) {
      throw new Error('Inscription status not found');
    }

    const newUserCourse = new UserCourse();
    newUserCourse.user = user;
    newUserCourse.course = course;
    newUserCourse.inscriptionStatus = inscriptionStatus;

    return await this.userCourseRepository.save(newUserCourse);
  }

  async findAll() {
    return await this.userCourseRepository.find();
  }

  async findOne(id: number) {
    return await this.userCourseRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateUserCourseDto: UpdateUserCourseDto) {
    const userCourse = await this.userCourseRepository.findOne({
      where: { id },
    });

    if (!userCourse) {
      throw new Error('User course not found');
    }

    const user = await this.userService.findOne(updateUserCourseDto.userId);
    if (!user) {
      throw new Error('User not found');
    }

    const course = await this.courseService.findOne(
      updateUserCourseDto.courseId,
    );
    if (!course) {
      throw new Error('Course not found');
    }

    const inscriptionStatus = await this.inscriptionStatusService.findOne(
      updateUserCourseDto.inscriptionStatusId,
    );

    if (!inscriptionStatus) {
      throw new Error('Inscription status not found');
    }

    userCourse.user = user;
    userCourse.course = course;
    userCourse.inscriptionStatus = inscriptionStatus;

    return await this.userCourseRepository.update(id, userCourse);
  }

  async remove(id: number) {
    return await this.userCourseRepository.delete(id);
  }
}
