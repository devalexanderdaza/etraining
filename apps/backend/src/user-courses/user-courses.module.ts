import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from 'src/courses/courses.module';
import { CoursesService } from 'src/courses/courses.service';
import { InscriptionStatusModule } from 'src/inscription-status/inscription-status.module';
import { InscriptionStatusService } from 'src/inscription-status/inscription-status.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { UserCourse } from './entities/user-course.entity';
import { UserCoursesController } from './user-courses.controller';
import { UserCoursesService } from './user-courses.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserCourse]),
    UsersModule,
    CoursesModule,
    InscriptionStatusModule,
  ],
  controllers: [UserCoursesController],
  providers: [
    UserCoursesService,
    UsersService,
    CoursesService,
    InscriptionStatusService,
  ],
})
export class UserCoursesModule {}
