import { useState } from 'react';

const MIN_DOORS = 3;
const MAX_DOORS = 10;

export function useForm() {
  const [doorAmount, setDoorAmount] = useState<number>(MIN_DOORS);
  const [prizedDoor, setPrizedDoor] = useState<number>(1);

  const handleChangeDoorAmount = (value: number) => {
    if (value >= MIN_DOORS && value <= MAX_DOORS) {
      setDoorAmount(value);

      if (value < prizedDoor) {
        setPrizedDoor(value);
      }
    }
  };

  const handleChangePrizedDoor = (value: number) => {
    if (value >= 1 && value <= doorAmount) {
      setPrizedDoor(value);
    }
  };

  return {
    doorAmount,
    prizedDoor,
    handleChangeDoorAmount,
    handleChangePrizedDoor,
  };
}
