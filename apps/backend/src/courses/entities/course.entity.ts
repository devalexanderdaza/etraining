import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'courses',
})
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  categoryId: number;

  @Column()
  modalidyId: number;

  @Column()
  duration: number;

  @Column()
  cuota: number;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
