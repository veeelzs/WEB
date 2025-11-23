'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';
import Student from './Student/Student';
import AddStudent, { type FormFields } from './AddStudent/AddStudent';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { constants } from 'buffer';

const text = '<< Список студентов';
const NavigationStudent = (): React.ReactElement => {
  
  return (
    <div>
        <Link href="/students">{text}</Link>
      </div>
  );
};

export default NavigationStudent;