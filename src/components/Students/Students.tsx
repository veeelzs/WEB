'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';
import Student from './Student/Student';
import AddStudent, { type FormFields } from './AddStudent/AddStudent';
import { v4 as uuidv4 } from 'uuid';

const Students = (): React.ReactElement => {
  const {
    students,
    deleteStudentMutate,
    addStudentMutate,
  } = useStudents();

   /**
   * Удаление студента - обработчик события нажатия "удалить"
   * @param studentId Ид студента
   */
  const onDeleteHandler = (studentId: number): void => {
    if (confirm('Удалить студента?')) {
      debugger;
      console.log('onDeleteHandler', studentId);


      deleteStudentMutate(studentId);
    }
  };

   /**
   * Добавления студента - обработчик события нажатия "добавить"
   * @param studentFormField Форма студента
   */
  const onAddHandler = (studentFormField: FormFields): void => {
    debugger;
    console.log('Добавление студента', studentFormField);

    addStudentMutate({
      id: -1,
      uuid: uuidv4(),
      ...studentFormField,
      contacts: "не заполнено",
      groupId: studentFormField.groupId || 1,
    });
  };

  return (
    <div className={styles.Students}>
      <AddStudent onAdd={onAddHandler} />

      {students.map((student: StudentInterface) => (
        <div key={student.id || student.uuid} className={styles.StudentWrapper}>
          <Student student={student} onDelete={onDeleteHandler} />
          {/* Выводим группу студента */}
          <div style={{ fontSize: '0.9em', color: '#555', marginTop: '4px' }}>
            {student.group ? `Группа: ${student.group.name}` : 'Группа: не указана'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Students;
