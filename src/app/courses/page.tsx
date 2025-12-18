import Courses from '@/components/Courses/Courses';
import Page from '@/components/layout/Page/Page';
import { META_DESCRIPTION, META_TITLE } from '@/constants/meta';
import { type Metadata } from 'next/types';

export const metadata: Metadata = {
  title: `Курсы - ${META_TITLE}`,
  description: META_DESCRIPTION,
};

const CoursesPage = (): React.ReactNode => (
  <Page>
    <h1>Курсы</h1>
    <Courses />
  </Page>
);

export default CoursesPage;
