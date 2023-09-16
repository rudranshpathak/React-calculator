import React, { useState } from 'react';

function Calculator() {
  // State variables
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  // Function to handle input changes
  const handleInputChange = (e, input) => {
    const value = e.target.value;
    if (input === 'num1') {
      setNum1(value);
    } else if (input === 'num2') {
      setNum2(value);
    }
  };

  // Function to handle operator click
  const handleOperatorClick = (selectedOperator) => {
    setOperator(selectedOperator);
  };

  // Function to perform calculations
  const calculate = () => {
    setError('');

    // Validate input
    if (num1.trim() === '' || num2.trim() === '') {
      setError('Please enter both numbers.');
      setResult('');
      return;
    }

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      setError('Please enter valid numbers.');
      setResult('');
      return;
    }

    let calculatedResult;

    switch (operator) {
      case '+':
        calculatedResult = parsedNum1 + parsedNum2;
        break;
      case '-':
        calculatedResult = parsedNum1 - parsedNum2;
        break;
      case '*':
        calculatedResult = parsedNum1 * parsedNum2;
        break;
      case '/':
        if (parsedNum2 === 0) {
          setError('Division by zero is not allowed.');
          setResult('');
          return;
        }
        calculatedResult = parsedNum1 / parsedNum2;
        break;
      default:
        setError('Please select an operator.');
        setResult('');
        return;
    }

    setResult(`Result: ${calculatedResult}`);
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <div>
        <input
          type="text"
          placeholder="Enter number 1"
          value={num1}
          onChange={(e) => handleInputChange(e, 'num1')}
        />
        <input
          type="text"
          placeholder="Enter number 2"
          value={num2}
          onChange={(e) => handleInputChange(e, 'num2')}
        />
      </div>
      <div>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
      <button onClick={calculate}>Calculate</button>
      {error && <div className="error">{error}</div>}
      {result && <div className="success">{result}</div>}
    </div>
  );
}

export default Calculator;

