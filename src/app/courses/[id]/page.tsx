'use client';
import { useParams } from 'next/navigation';
import useCourses from '@/hooks/useCourses';
import Page from '@/components/layout/Page/Page';

const CoursePage = (): React.ReactElement => {
  const params = useParams();
  const { id } = params;
  const { courses } = useCourses();

  if (!id) return <Page>Загрузка...</Page>;

  const course = courses.find(c => c.id === Number(id));

  if (!course) return <Page>Курс не найден</Page>;

  return (
    <Page>
      <h1 className="text-2xl font-bold mt-4">{course.name}</h1>
      {course.description && <div>{course.description}</div>}

      <div className="mt-4">
        <div className="font-semibold">Группы курса</div>
        {course.groups?.length ? course.groups.map(group => (
          <div key={group.id}>{`${group.id} - ${group.name}`}</div>
        )) : (
          <div>Нет групп</div>
        )}
      </div>
    </Page>
  );
};

export default CoursePage;
