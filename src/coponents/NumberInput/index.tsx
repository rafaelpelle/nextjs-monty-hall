import ChevronUp from '../Icons/ChevronUp';
import ChevronDown from '../Icons/ChevronDown';
import styles from './NumberInput.module.css';

interface Props {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
}

export default function NumberInput({ label, value, onChange }: Props) {
  const handleIncrease = () => onChange(value + 1);
  const handleDecrease = () => onChange(value - 1);

  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <div className={styles.valueContainer}>
        <span className={styles.value}>{value}</span>
        <div className={styles.buttonContainer}>
          <button onClick={handleDecrease}>
            <ChevronDown />
          </button>
          <button onClick={handleIncrease}>
            <ChevronUp />
          </button>
        </div>
      </div>
    </div>
  );
}
