import styles from './Door.module.css';

export default function Door({ isSelected, number }) {
  const isSelectedClass = isSelected ? styles.selected : '';

  return (
    <div className={styles.container}>
      <div className={`${styles.frame} ${isSelectedClass}`}>
        <div className={styles.door}>
          <div className={styles.number}>{number}</div>
          <div className={styles.knob} />
        </div>
      </div>

      <div className={styles.floor} />
    </div>
  );
}
