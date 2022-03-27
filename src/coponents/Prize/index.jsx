import styles from './Prize.module.css';

export default function Prize() {
  return (
    <div className={styles.prize}>
      <div className={styles.cover} />
      <div className={styles.body} />
      <div className={styles.giftBow1} />
      <div className={styles.giftBow2} />
    </div>
  );
}
