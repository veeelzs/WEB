import { useQuery } from '@tanstack/react-query';
import { getCoursesApi } from '@/api/coursesApi';
import type CourseInterface from '@/types/CourseInterface';

interface CoursesHookInterface {
  courses: CourseInterface[];
}

const useCourses = (): CoursesHookInterface => {
  const { data } = useQuery({
    queryKey: ['courses'],
    queryFn: () => getCoursesApi(),
    enabled: true,
  });

  return {
    courses: data ?? [],
  };
};

export default useCourses;
