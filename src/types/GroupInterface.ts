import type StudentInterface from './StudentInterface';
import type CourseInterface from './CourseInterface';

interface GroupInterface {
  id: number;
  name: string;
  contacts: string;
  courseId?: number | null;
  course?: CourseInterface | null;
  students: StudentInterface[];
};

export default GroupInterface;
