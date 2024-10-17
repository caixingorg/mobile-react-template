// src/components/UtilsDemo.tsx
import React, { useState } from 'react';
import { formatDate, deepClone } from '../utils/helpers';
import useLocalStorage from '../hooks/useLocalStorage';
import useDebounce from '../hooks/useDebounce';

const UtilsDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  const [storedValue, setStoredValue] = useLocalStorage('demoKey', 'Initial Value');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleStorageChange = () => {
    setStoredValue(`New Value ${Date.now()}`);
  };

  const originalObject = { a: 1, b: { c: 2 } };
  const clonedObject = deepClone(originalObject);

  return (
    <div>
      <h2>Utils and Custom Hooks Demo</h2>
      <p>Formatted Date: {formatDate(new Date())}</p>
      <p>Deep Cloned Object: {JSON.stringify(clonedObject)}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to test debounce"
      />
      <p>Debounced Value: {debouncedValue}</p>
      <p>Stored Value: {storedValue}</p>
      <button onClick={handleStorageChange}>Update Stored Value</button>
    </div>
  );
};

export default UtilsDemo;