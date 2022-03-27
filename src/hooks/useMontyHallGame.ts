import { useState, useEffect, useCallback } from 'react';
import { DoorModel } from '../types/model';

const INITIAL_DOOR: DoorModel = {
  number: 0,
  isSelected: false,
  isOpen: false,
  hasPrize: false,
};

export function useMontyHallGame(doorAmount: number, prizedDoor: number) {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [doors, setDoors] = useState<DoorModel[]>([]);

  const handleSelectDoor = (doorNumber: number) => {
    setDoors(
      doors.map((door) => ({
        ...door,
        isSelected: !door.isSelected && door.number === doorNumber,
      })),
    );
  };

  const initializeDoors = useCallback(() => {
    if (doorAmount >= 2 && prizedDoor >= 1) {
      setDoors(
        Array.from(
          { length: doorAmount },
          (_, i: number): DoorModel => ({
            ...INITIAL_DOOR,
            number: i + 1,
            hasPrize: i + 1 === prizedDoor,
          }),
        ),
      );
      setIsReady(true);
    }
  }, [doorAmount, prizedDoor]);

  useEffect(() => {
    initializeDoors();
  }, [initializeDoors]);

  return {
    isReady,
    doors,
    handleSelectDoor,
  };
}
