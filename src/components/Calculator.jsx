import React, {useState} from "react";
import "./Calculator.css";

export default function Calculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);


  const handleChange1 = (e) => {
  setNumber1(e.target.value);
  };
  const handleChange2 = (e) => {
  setNumber2(e.target.value);
  };

  const AdditionTotal = () => {
    // Convert string inputs to numbers (e.g., using Number() or parseInt())
    const num1 = Number(number1);
    const num2 = Number(number2);
    setResult(num1 + num2);
  };

  const SubtractionTotal = () => {
    // Convert string inputs to numbers (e.g., using Number() or parseInt())
    const num1 = Number(number1);
    const num2 = Number(number2);
    setResult(num1 - num2);
  };
  
  const MultiplicationTotal = () => {
    // Convert string inputs to numbers (e.g., using Number() or parseInt())
    const num1 = Number(number1);
    const num2 = Number(number2);
    setResult(num1 * num2);
  };

  const DivisionTotal = () => {
    // Convert string inputs to numbers (e.g., using Number() or parseInt())
    const num1 = Number(number1);
    const num2 = Number(number2);
    if (num2 === 0) {
      return "Cannot divide by zero"; // Handle division by zero
    }
    return setResult(num1 / num2);
  };

  return (
    <div className="calculator-container">
      <h2 className="title">Basic Calculator</h2>

      <div className="input-group">
        <input type="number" value={number1} onChange={handleChange1} placeholder="First number"  />
        <input type="number" value={number2} onChange={handleChange2} placeholder="Second number"  />
      </div>

      <div className="button-group">
        <button onClick={AdditionTotal}>+</button>
        <button onClick={SubtractionTotal}>-</button>
        <button onClick={MultiplicationTotal}>×</button>
        <button onClick={DivisionTotal}>÷</button>
      </div>

      <div className="result-box">
        <p>Result:</p>
        <h3>{result !== null ? result : ""}</h3>
      </div>
    </div>
  );
}
