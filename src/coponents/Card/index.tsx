import styles from './Card.module.css';

interface Props {
  bgColor?: string;
  children?: any;
}

export default function Card({ bgColor, children }: Props) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: bgColor ?? '#eee' }}
    >
      {children}
    </div>
  );
}
