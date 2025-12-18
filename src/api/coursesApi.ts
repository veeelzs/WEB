import type CourseInterface from '@/types/CourseInterface';

export const getCoursesApi = async (): Promise<CourseInterface[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}courses`);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}${response.statusText}`);
    }
    const courses = await response.json() as CourseInterface[];
    return courses;
  }
  catch (err) {
    console.log('>>> getCoursesApi', err);
    return [] as CourseInterface[];
  }
};
