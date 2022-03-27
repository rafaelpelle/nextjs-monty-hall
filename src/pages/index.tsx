import Link from 'next/link';
import Card from '../coponents/Card';
import NumberInput from '../coponents/NumberInput';
import { useForm } from '../hooks/useForm';

import styles from '../styles/Home.module.css';

export default function Home() {
  const {
    doorAmount,
    prizedDoor,
    handleChangeDoorAmount,
    handleChangePrizedDoor,
  } = useForm();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.row}>
        <Card bgColor="red">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            value={doorAmount}
            onChange={handleChangeDoorAmount}
            label="Qtde Portas"
          />
        </Card>
      </div>
      <div className={styles.row}>
        <Card>
          <NumberInput
            value={prizedDoor}
            onChange={handleChangePrizedDoor}
            label="Porta Premiada"
          />
        </Card>
        <Link
          href={`/game?doorAmount=${doorAmount}&prizedDoor=${prizedDoor}`}
          passHref
        >
          <div className={styles.startButton}>
            <Card bgColor="#5c7e32">
              <h1>Iniciar o Jogo</h1>
            </Card>
          </div>
        </Link>
      </div>
    </div>
  );
}
