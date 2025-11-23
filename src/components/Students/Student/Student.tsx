import type StudentInterface from '@/types/StudentInterface';
import styles from './Student.module.scss';

interface Props {
  student: StudentInterface;
  onDelete: (id: number) => void;
  onOpen: (id: number) => void;
}

const Student = ({ student, onDelete, onOpen }: Props): React.ReactElement => {
  const onDeleteHandler = (): void => {
    onDelete(student.id);
  };
  const onOpenHandler = (): void => {
    onOpen(student.id);
  };

  const modifier = student.isDeleted ? '--isDeleted' : student.isNew ? '--isNew' : '';

  return (
    <div className={`${styles.Student} ${styles[modifier]}`}>
      {`${student.id || 'xxxx'} - ${student.lastName} ${student.firstName} ${student.middleName}`}
      <button onClick={onDeleteHandler}>Удалить</button>
      <button onClick={onOpenHandler}>Открыть</button>
    </div>
  );
};

export default Student;