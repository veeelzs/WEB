import { Student } from './entity/Student.entity';
import type StudentInterface from '@/types/StudentInterface';
import getRandomFio from '@/utils/getRandomFio';
import AppDataSource, { dbInit } from './AppDataSource';
import type { Repository } from 'typeorm';

const getStudentRepository = async (): Promise<Repository<Student>> => {
  await dbInit();
  return AppDataSource.getRepository(Student);
};

/**
 * Получение студентов
 * @returns Promise<StudentInterface[]>
 */
export const getStudentsDb = async (): Promise<StudentInterface[]> => {
  const repository = await getStudentRepository();
  return await repository.find({
    relations: ['group'],
  });
};

/**
 * Удаления студента
 * @param studentId ИД удаляемого студента
 * @returns
 */
export const deleteStudentDb = async (studentId: number): Promise<number> => {
  const repository = await getStudentRepository();
  await repository.delete(studentId);
  return studentId;
};

/**
 * Добавление студента
 * @param studentField поля студента
 * @returns
 */
export const addStudentDb = async (studentFields: Omit<StudentInterface, 'id'>): Promise<StudentInterface> => {
  const student = new Student();
  const repository = await getStudentRepository();
  const newStudent = await repository.save({
    ...student,
    ...studentFields,
  });
  return newStudent;
};

/**
 * Добавление  рандомных студента
 */
export const addRandomStudentsDb = async (amount: number = 10): Promise<StudentInterface[]> => {
  const students: StudentInterface[] = [];

  for (let i = 0; i < amount; i++) {
    const fio = getRandomFio();

    const newStudent = await addStudentDb({
      ...fio,
      contacts: 'contact',
      groupId: 1,
    });
    students.push(newStudent);
  }

  return students;
};
