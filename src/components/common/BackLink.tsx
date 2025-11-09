import Link from 'next/link';
import styles from './BackLink.module.scss';

interface Props {
  href: string;
  label: string;
}

const BackLink = ({ href, label }: Props): React.ReactElement => {
  return (
    <div className={styles.BackLink}>
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default BackLink;
