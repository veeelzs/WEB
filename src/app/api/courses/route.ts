import { addCourseDb, getCoursesDb } from '@/db/courseDb';

export async function GET(): Promise<Response> {
  const courses = await getCoursesDb();

  return new Response(JSON.stringify(courses), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export async function POST(req: Request): Promise<Response> {
  const course = await req.json();
  const newCourse = await addCourseDb(course);

  return new Response(JSON.stringify(newCourse), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
