import { useEffect, useState } from "react";
import "./ripple.css";

const Ripple = () => {
  const [isRipplingEffect, setIsRipplingEffect] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: -1, y: -1 });

  const handleRippleEffect = (event) => {
    console.log(event.target.getBoundingClientRect());
    console.log(event.clientX, event.clientY);

    const rect = event.target.getBoundingClientRect();

    setCoordinates({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  useEffect(() => {
    if (coordinates.x !== -1 && coordinates.y !== -1) {
      setIsRipplingEffect(true);
      setTimeout(() => setIsRipplingEffect(false), 500);
    } else {
      setIsRipplingEffect(false);
    }
  }, [coordinates]);

  useEffect(() => {
    if (!isRipplingEffect) setCoordinates({ x: -1, y: -1 });
  }, [isRipplingEffect]);

  console.log(coordinates, isRipplingEffect);

  return (
    <div className="main">
      <div className="ripple-effect-container">
        <h1>Button Ripple Effect</h1>
        <button className="ripple-btn" onClick={handleRippleEffect}>
          {isRipplingEffect ? (
            <span
              className="ripple-inner-span"
              style={{ left: coordinates.x, top: coordinates.y }}
            ></span>
          ) : null}
          Ripple Effect
        </button>
      </div>
    </div>
  );
};

export default Ripple;
