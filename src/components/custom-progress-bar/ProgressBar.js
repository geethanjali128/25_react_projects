import { useEffect, useState } from "react";
import "./progress.css";

function ProgressBar() {
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev < 100) {
          return prev + 1; // Increment progress by 1 every interval
        } else {
          clearInterval(interval); // Stop incrementing when it reaches 100
          return prev;
        }
      });
    }, 100); // Increase progress every 100ms

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="progress-bar-container">
      <h1>Custom Progress Bar</h1>
      <div className="progress-bar">
        <div className="wrapper">
          <div
            style={{ width: `${progressPercent}%` }}
            className="innerWrapper"
          >
            {progressPercent}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
