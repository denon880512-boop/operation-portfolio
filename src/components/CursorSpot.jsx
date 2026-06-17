import { useEffect, useState } from 'react';

function CursorSpot() {
  const [point, setPoint] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event) => {
      setPoint({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div
      className="cursor-spot"
      style={{ transform: `translate3d(${point.x - 12}px, ${point.y - 12}px, 0)` }}
    />
  );
}

export default CursorSpot;
