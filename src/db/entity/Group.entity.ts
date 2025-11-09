import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'class' })
export class Group {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  contacts!: string;
}
