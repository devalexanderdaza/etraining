import { Course } from 'src/courses/entities/course.entity';
import { InscriptionStatus } from 'src/inscription-status/entities/inscription-status.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'user_courses',
})
export class UserCourse {
  @PrimaryGeneratedColumn()
  id: number;

  // Relación con la entidad User
  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  // Relación con la entidad Course
  @ManyToOne(() => Course)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  // Relación con la entidad InscriptionStatus
  @ManyToOne(() => InscriptionStatus)
  @JoinColumn({ name: 'inscriptionStatusId' })
  inscriptionStatus: InscriptionStatus;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
