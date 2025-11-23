import type GroupInterface from '@/types/GroupInterface';
import styles from './Group.module.scss';

interface Props {
  group: GroupInterface;
}

const Group = ({ group }: Props): React.ReactElement => {
  

  return (
    <div className={styles.Group}>
      {`${group.id || 'xxxx'} - ${group.name} `}
    </div>
  );
};

export default Group;