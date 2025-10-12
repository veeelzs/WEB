'use client';

import { useForm } from 'react-hook-form';
import type StudentInterface from '@/types/StudentInterface';
import styles from './AddStudent.module.scss';

interface Props {
  onAddStudent: (student: Omit<StudentInterface, 'id' | 'isDeleted'>) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  middleName: string;
}

const AddStudent = ({ onAddStudent }: Props): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData): void => {
    onAddStudent(data);
    reset();
  };

  return (
    <div className={styles.AddStudent}>
      <h3>Добавить студента</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="lastName">Фамилия *</label>
          <input
            id="lastName"
            type="text"
            {...register('lastName', { 
              required: 'Фамилия обязательна для заполнения',
              minLength: {
                value: 2,
                message: 'Фамилия должна содержать минимум 2 символа'
              }
            })}
          />
          {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="firstName">Имя *</label>
          <input
            id="firstName"
            type="text"
            {...register('firstName', { 
              required: 'Имя обязательно для заполнения',
              minLength: {
                value: 2,
                message: 'Имя должно содержать минимум 2 символа'
              }
            })}
          />
          {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
        </div>

        <div className={styles.field}>
          <label htmlFor="middleName">Отчество *</label>
          <input
            id="middleName"
            type="text"
            {...register('middleName', { 
              required: 'Отчество обязательно для заполнения',
              minLength: {
                value: 2,
                message: 'Отчество должно содержать минимум 2 символа'
              }
            })}
          />
          {errors.middleName && <span className={styles.error}>{errors.middleName.message}</span>}
        </div>

        <button type="submit" className={styles.submitButton}>
          Добавить студента
        </button>
      </form>
    </div>
  );
};

export default AddStudent;