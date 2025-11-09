'use client';

import React from 'react';
import useStudents from '@/hooks/useStudents';
import BackLink from '@/components/common/BackLink';

interface Props {
  params: { id: string };
}

const StudentPage = ({ params }: Props): React.ReactElement => {
  const { students } = useStudents();

  const studentId = Number(params.id);
  const student = students.find((s) => s.id === studentId);

  if (!student) return <div>Студент не найден</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <BackLink href="/students" label="<< список студентов" />

      <div style={{ marginTop: '20px', lineHeight: '1.6' }}>
        <div><strong>ID</strong> - {student.id}</div>
        <div><strong>Фамилия</strong> - {student.lastName}</div>
        <div><strong>Имя</strong> - {student.firstName}</div>
        <div><strong>Отчество</strong> - {student.middleName}</div>
        <div><strong>Группа</strong> - {student.groupId ?? 'не указана'}</div>
      </div>
    </div>
  );
};

export default StudentPage;
