import Link from 'next/link';
import type StudentInterface from '@/types/StudentInterface';
import styles from './Student.module.scss';

interface Props {
  student: StudentInterface;
  onDelete: (id: number) => void;
}

const Student = ({ student, onDelete }: Props): React.ReactElement => {
  const onDeleteHandler = (): void => {
    onDelete(student.id);
  };

  const modifier = student.isDeleted ? '--isDeleted' : student.isNew ? '--isNew' : '';

  return (
    <div className={`${styles.Student} ${styles[modifier]}`}>
      {/* ФИО студента со ссылкой на страницу */}
      <Link href={`/students/${student.id}`} className={styles.StudentLink}>
        {`${student.id || 'xxxx'} - ${student.lastName} ${student.firstName} ${student.middleName}`}
      </Link>

      {}
      <button onClick={onDeleteHandler}>Удалить</button>
    </div>
  );
};

export default Student;
