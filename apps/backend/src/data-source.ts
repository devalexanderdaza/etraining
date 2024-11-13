import { DataSource } from 'typeorm';
import { Category } from './categories/entities/category.entity';
import { Course } from './courses/entities/course.entity';
import { InscriptionStatus } from './inscription-status/entities/inscription-status.entity';
import { Modality } from './modalities/entities/modality.entity';
import { Role } from './roles/entities/role.entity';
import { UserCourse } from './user-courses/entities/user-course.entity';
import { User } from './users/entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '162.241.61.243',
  port: 3306,
  username: 'alexan43_etraining_prueba',
  password: '[r9N*7E7%@AT',
  database: 'alexan43_etraining_prueba',
  synchronize: false,
  logging: true,
  entities: [
    User,
    Role,
    Course,
    Category,
    Modality,
    InscriptionStatus,
    UserCourse,
  ],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});
