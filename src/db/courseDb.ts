import { Course } from './entity/Course.entity';
import AppDataSource from './AppDataSource';
import type CourseInterface from '@/types/CourseInterface';
import type { Repository } from 'typeorm';

const courseRepository = (): Repository<Course> => AppDataSource.getRepository(Course);

/**
 * Получение курсов
 * @returns Promise<CourseInterface[]>
 */
export const getCoursesDb = async (): Promise<CourseInterface[]> => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return await courseRepository().find({
    relations: ['groups', 'groups.students'],
  });
};

/**
 * Добавление курса
 * @returns Promise<CourseInterface>
 */
export const addCourseDb = async (
  courseFields: Omit<CourseInterface, 'id' | 'groups'>,
): Promise<CourseInterface> => {
  const course = new Course();
  const newCourse = await courseRepository().save({
    ...course,
    ...courseFields,
  });

  return newCourse;
};
