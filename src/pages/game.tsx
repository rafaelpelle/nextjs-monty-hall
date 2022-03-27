import { useRouter } from 'next/router';
import { useMontyHallGame } from '../hooks/useMontyHallGame';
import Door from '../coponents/Door';

export default function Game() {
  const router = useRouter();
  const { doorAmount, prizedDoor } = router?.query;

  const { isReady, doors } = useMontyHallGame(
    Number(doorAmount),
    Number(prizedDoor),
  );

  return isReady ? (
    <div>
      {doors.map((door) => (
        <Door key={door.number} door={door} />
      ))}
    </div>
  ) : null;
}
