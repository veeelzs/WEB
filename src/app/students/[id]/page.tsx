'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import useStudents from '@/hooks/useStudents';
import Page from '@/components/layout/Page/Page';
import NavigationStudent from '@/components/Students/Student'

const StudentPage = () => {
  const params = useParams();
  const { id } = params;
  const { students } = useStudents();

  if (!id) return <Page>Загрузка...</Page>;

  const student = students.find((s) => s.id === Number(id));

  if (!student) return <Page>Студент не найден</Page>;

  return (
    <Page>
      <NavigationStudent/>
      <h1 className="text-2xl font-bold mt-4">
        {student.firstName} {student.lastName}
      </h1>


      <div><strong>ID</strong> - {student.id}</div>
      <div><strong>Фамилия</strong> - {student.lastName}</div>
      <div><strong>Имя</strong> - {student.firstName}</div>
      <div><strong>Отчество</strong> - {student.middleName}</div>
      <div><strong>Группа</strong> - {student.groupId ?? 'не указана'}</div>
    </Page>
  );
};

export default StudentPage;