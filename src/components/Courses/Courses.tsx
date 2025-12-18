'use client';

import useCourses from '@/hooks/useCourses';
import Course from './Course/Course';
import styles from './Courses.module.scss';
import type CourseInterface from '@/types/CourseInterface';

const Courses = (): React.ReactElement => {
  const { courses } = useCourses();

  return (
    <div className={styles.Courses}>
      {courses.map((course: CourseInterface) => (
        <div key={course.id} className={styles.courseSection}>
          <Course course={course} />
        </div>
      ))}
    </div>
  );
};

export default Courses;
