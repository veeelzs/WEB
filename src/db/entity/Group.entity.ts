import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from './Student.entity';
import { Course } from './Course.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  contacts!: string;

  @Column({ nullable: true })
  courseId?: number | null;

  @ManyToOne(() => Course, course => course.groups, { nullable: true })
  @JoinColumn({ name: 'courseId' })
  course?: Course | null;

  @OneToMany(() => Student, (student) => student.group)
  students!: Student[];
}
