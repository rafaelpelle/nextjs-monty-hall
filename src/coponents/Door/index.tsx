import styles from './Door.module.css';
import { DoorModel } from '../../types/model';

interface Props {
  door: DoorModel;
  handleSelectDoor: (doorNumber: number) => void;
}

export default function Door({ door, handleSelectDoor }: Props) {
  const { number, isSelected, isOpen, hasPrize } = door;

  const isSelectedClass = isSelected ? styles.selected : '';

  return (
    <div className={styles.container}>
      <div className={`${styles.frame} ${isSelectedClass}`}>
        <div className={styles.door} onClick={() => handleSelectDoor(number)}>
          <div className={styles.number}>{number}</div>
          <div className={styles.knob} />
        </div>
      </div>

      <div className={styles.floor} />
    </div>
  );
}
