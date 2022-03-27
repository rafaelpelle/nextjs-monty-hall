import styles from './Door.module.css';

export default function Door() {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.door}>
          <div className={styles.number}>1</div>
          <div className={styles.knob} />
        </div>
      </div>

      <div className={styles.floor} />
    </div>
  );
}
