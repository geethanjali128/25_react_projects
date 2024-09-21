import React, { useState } from "react";
import "./bmi.css";

const BMICalculator = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [errMsg, setErrMsg] = useState("");

  const calculateBmi = () => {
    // checks whether that the user enters the details correctly or not
    if (!height || !weight) {
      setErrMsg("Please enter both Height and Weight");
      return;
    }

    // html input values are always treated as strings by default,parseFloat is used here to convert these string values into floating-point numbers
    const numericHeight = parseFloat(height);
    const numericWeight = parseFloat(weight);

    if (
      isNaN(numericHeight) ||
      isNaN(numericWeight) ||
      numericHeight <= 0 ||
      numericWeight <= 0
    ) {
      setErrMsg("Please enter valid numeric values for both height and weight");
      return;
    }

    const calculateHeightInMetres = numericHeight / 100;
    const calculateBmiValue = (
      numericWeight /
      (calculateHeightInMetres * calculateHeightInMetres)
    ).toFixed(2);
    setBmi(calculateBmiValue);
    setErrMsg("");
  };
  return (
    <div className="bmi-calculator-container">
      <div className="bmi-calculator">
        <h1>BMI Calculator</h1>
        <div className="input-container">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Weight(KG):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button onClick={calculateBmi}>Calculate BMI</button>
        {errMsg ? <p className="err">{errMsg}</p> : null}
        {!errMsg &&
          bmi && ( // Show BMI result if there’s no error and BMI is calculated
            <p className="bmi-message">
              {bmi < 18.5
                ? "Underweight"
                : bmi >= 18.5 && bmi < 24.9
                ? "Normal Weight"
                : bmi >= 25 && bmi < 29.9
                ? "Overweight"
                : "Obese"}
            </p>
          )}
      </div>
    </div>
  );
};

export default BMICalculator;
