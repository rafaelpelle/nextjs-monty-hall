import styles from './Door.module.css';
import { DoorModel } from '../../types/model';
import Prize from '../Prize';

interface Props {
  door: DoorModel;
  handleSelectDoor: (doorNumber: number) => void;
  handleOpenDoor: (doorNumber: number) => void;
}

export default function Door({
  door: { number, isSelected, isOpen, hasPrize },
  handleSelectDoor,
  handleOpenDoor,
}: Props) {
  const isSelectedClass = isSelected ? styles.selected : '';
  const isOpenClass = isOpen ? styles.opened : '';

  const handleSelect = () => handleSelectDoor(number);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    handleOpenDoor(number);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.frame} ${isSelectedClass} ${isOpenClass}`}>
        {!isOpen ? (
          <div className={styles.door} onClick={handleSelect}>
            <div className={styles.number}>{number}</div>
            <div className={styles.knob} onClick={handleOpen} />
          </div>
        ) : hasPrize ? (
          <Prize />
        ) : null}
      </div>
      <div className={styles.floor} />
    </div>
  );
}
