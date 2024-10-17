import React, { useState, useMemo } from 'react';
import { Button, Input } from 'antd-mobile';

const ExpensiveCalculation: React.FC = () => {
  const [number, setNumber] = useState(0);
  const [, setDummy] = useState(0);

  const expensiveResult = useMemo(() => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += number;
    }
    return result;
  }, [number]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <Input
        type="number"
        value={number.toString()}
        onChange={(value) => setNumber(Number(value))}
      />
      <p>Result: {expensiveResult}</p>
      <Button onClick={() => setDummy(Math.random())}>Force Re-render</Button>
    </div>
  );
};

export default ExpensiveCalculation;