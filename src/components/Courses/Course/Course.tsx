import type CourseInterface from '@/types/CourseInterface';
import styles from './Course.module.scss';

interface Props {
  course: CourseInterface;
}

const Course = ({ course }: Props): React.ReactElement => {
  return (
    <div className={styles.Course}>
      <div className={styles.title}>{`${course.id} - ${course.name}`}</div>
      <div className={styles.groups}>
        {course.groups?.length ? course.groups.map(group => (
          <div key={group.id} className={styles.groupItem}>
            {`${group.id} - ${group.name}`}
          </div>
        )) : (
          <div className={styles.empty}>Нет групп</div>
        )}
      </div>
    </div>
  );
};

export default Course;
