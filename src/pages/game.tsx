import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMontyHallGame } from '../hooks/useMontyHallGame';
import Door from '../coponents/Door';
import styles from '../styles/Game.module.css';

export default function Game() {
  const router = useRouter();
  const { doorAmount, prizedDoor } = router?.query;

  const { isReady, doors, handleSelectDoor, handleOpenDoor } = useMontyHallGame(
    Number(doorAmount),
    Number(prizedDoor),
  );

  return isReady ? (
    <div className={styles.gameContainer}>
      <div className={styles.doorsContainer}>
        {doors.map((door) => (
          <Door
            key={door.number}
            door={door}
            handleSelectDoor={handleSelectDoor}
            handleOpenDoor={handleOpenDoor}
          />
        ))}
      </div>

      <Link href="/" passHref>
        <button className={styles.backButton}>REINICIAR O JOGO</button>
      </Link>
    </div>
  ) : null;
}
