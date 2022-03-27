import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Link href="/game?doorAmount=10&prizedDoor=2" passHref>
        <button className={styles.startButton}>INICIAR O JOGO</button>
      </Link>
    </div>
  );
}
