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
      deleteStudentMutate(studentId);
    }
  };

  const onAddHandler = (studentFormField: FormFields): void => {
    const nextid = students.length>0 ? Math.max(...students.map(s=> s.id))+1 : 1
    console.log('Добавление студента', studentFormField);

    addStudentMutate({
      id: nextid,
      ...studentFormField,
      groupId: 1,
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
        />
      ))}
    </div>
  );
};

export default Students;