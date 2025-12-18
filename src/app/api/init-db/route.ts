import { addGroupsDb } from '@/db/groupDb';
import { addStudentDb } from '@/db/studentDb';
import { addCourseDb } from '@/db/courseDb';

export async function GET(): Promise<Response> {
  const newCourse = await addCourseDb({
    name: 'Базовый курс',
    description: 'Курс по умолчанию',
  });

  const newGroup = await addGroupsDb({
    name: 'name',
    contacts: '',
    courseId: newCourse.id,
  });

  const newStudent = await addStudentDb({
    firstName: 'fname',
    lastName: 'lname',
    middleName: 'mname',
    contacts: '',
    groupId: newGroup.id,
  });

  console.log(newStudent, newGroup, newCourse);

  return new Response(JSON.stringify({
    newStudent,
    newGroup,
  }), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
