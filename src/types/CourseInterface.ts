import type GroupInterface from './GroupInterface';

interface CourseInterface {
  id: number;
  name: string;
  description?: string;
  groups: GroupInterface[];
}

export default CourseInterface;
