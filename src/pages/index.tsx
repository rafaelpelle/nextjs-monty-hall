import Door from '../coponents/Door';
import { DoorModel } from '../types/model';

const mockDoor: DoorModel = {
  number: 1,
  isSelected: false,
  isOpen: false,
  hasPrize: false,
};

export default function Home() {
  return (
    <div>
      <Door door={mockDoor} />
    </div>
  );
}
