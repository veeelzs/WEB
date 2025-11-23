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

  const onDeleteHandler = (studentId: number): void => {
    if (confirm('Удалить студента?')) {
      console.log('onDeleteHander',studentId);
      debugger;
      deleteStudentMutate(studentId);
    }
  };
  const OnOpenHandler = (studentId: number): void => {
    if (confirm('Открыть студента?')) {
      console.log('onOpenHander', studentId);
      window.location.href = `/students/${studentId}`;
    }
  };

  /**
   * Добавлениестудента-обработчик события нажатия "добавить"
   * @param studentFormField форма студента
   */
  const onAddHandler = (studentFormField: FormFields): void => {
    const nextid = students.length>0 ? Math.max(...students.map(s=> s.id))+1 : 1
    debugger;
    console.log('Добавление студента', studentFormField);

    addStudentMutate({
      id: nextid,
      ...studentFormField,
      //groupId: 1,
      uuid: uuidv4(),
      contacts: ''
    });
  };

  return (
    <div className={styles.Students}>
      <AddStudent onAdd={onAddHandler} />

      {students.map((student: StudentInterface) => (
        <Student
          key={student.id || student.uuid}
          student={student}
          onDelete={onDeleteHandler}
          onOpen={OnOpenHandler}
        />
      ))}
    </div>
  );
};

export default Students;