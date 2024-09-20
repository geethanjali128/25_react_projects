import { useState } from "react";
import "./custom.css";

const CustomProgressBar = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  const [errMsg, setErrMsg] = useState("");

  const handleProgressPercentage = (e) => {
    setProgressPercent(e.target.value);
    if (e.target.value > 100) {
      setErrMsg("Please enter a value less than 100");
    } else {
      setErrMsg("");
    }
  };

  return (
    <div className="progress-bar-container">
      <h1>Custom Progress Bar With Input</h1>
      <div className="progress-bar">
        <div className="wrapper">
          {progressPercent >= 0 && progressPercent <= 100 ? (
            <div
              style={{ width: `${progressPercent}%` }}
              className="innerWrapper"
            >
              {progressPercent}%
            </div>
          ) : (
            <p>{errMsg}</p>
          )}
        </div>
      </div>
      <div className="input-container">
        <label>Input Percentage :</label>
        <input
          type="number"
          value={progressPercent}
          onChange={handleProgressPercentage}
        />
      </div>
    </div>
  );
};

export default CustomProgressBar;
