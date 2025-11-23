import type StudentInterface from '@/types/StudentInterface';
import { useForm, type SubmitHandler } from 'react-hook-form';
import styles from './AddStudent.module.scss';
import type GroupInterface from '@/types/GroupInterface';
import Groups from '@/components/Groups/Groups'
import useGroups from '@/hooks/useGroups';
import { useState, useEffect } from 'react';
import { getGroupsApi } from '@/api/groupsApi';

export type FormFields = Pick<StudentInterface, 'firstName' | 'lastName' | 'middleName' | 'groupId'>;

interface Props {
  onAdd: (studentForm: FormFields) => void;
}


const AddStudent = ({ onAdd }: Props): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const [groupId, SetGroupId] = useState<number>(1);
  const [groups, setGroups] = useState<GroupInterface[]>([]);
  useEffect(()=>{
    const fetchGroups = async() => {
      const data = await getGroupsApi();
      setGroups(data);
      if (data.length>0) SetGroupId(data[0].id);
    };
    fetchGroups();
  },[] );

  const onSubmit: SubmitHandler<FormFields> = studentForm => onAdd(studentForm);

  return (
    <div className={styles.AddStudent}>
      <h2>Добавления студента</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          placeholder="Фамилия"
          {...register('lastName', { required: true })}
        />
        {errors.lastName && <div>Обязательное поле</div>}

        <input
          placeholder="Имя"
          {...register('firstName', { required: true })}
        />
        {errors.firstName && <div>Обязательное поле</div>}

        <input
          placeholder="Отчество"
          {...register('middleName', { required: true })}
        />
        {errors.middleName && <div>Обязательное поле</div>}

        <select
          {...register('groupId', { required: true })}
        >
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
      </select>

        <input type="submit" value="Добавить" />
      </form>

    </div>
  );
};

export default AddStudent;