'use client';

import useGroups from '@/hooks/useGroups';
import type GroupInterface from '@/types/GroupInterface';
import Group from './Group/Group';
import styles from './Groups.module.scss';
import type StudentInterface from '@/types/StudentInterface';

const Groups = (): React.ReactElement => {
  const { groups } = useGroups();

  return (
    <div className={styles.Groups}>
      {groups.map((group: GroupInterface) => (
        <div key={group.id} className={styles.groupSection}>
          <Group group={group} />
          {group.students.map((student: StudentInterface) => (
            <div key={student.id}>{`${student.id} - ${student.lastName} ${student.firstName}`}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Groups;