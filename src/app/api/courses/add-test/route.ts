import AppDataSource, { dbInit } from '@/db/AppDataSource';
import { Course } from '@/db/entity/Course.entity';
import { addCourseDb } from '@/db/courseDb';

const defaultCourses = [
  {
    name: 'Информационные системы и программирование',
    description: 'По умолчанию',
  },
  {
    name: 'Нейронные сети',
    description: 'По умолчанию',
  },
];

export async function GET(): Promise<Response> {
  await dbInit();

  const repository = AppDataSource.getRepository(Course);
  const newCourses: Course[] = [];
  const existCourses: Course[] = [];

  for (const course of defaultCourses) {
    const exists = await repository.findOne({ where: { name: course.name } });

    if (!exists) {
      const newCourse = await addCourseDb(course);
      newCourses.push(newCourse as Course);
    }
    else {
      existCourses.push(exists);
    }
  }

  return new Response(JSON.stringify({ newCourses, existCourses }), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
