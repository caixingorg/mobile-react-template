import React, { useState } from 'react';
import logger from '../utils/logger';

const ErrorDemo: React.FC = () => {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error('This is a demo error');
  }

  const handleClick = () => {
    logger.info('Button clicked');
    setShouldError(true);
  };

  return (
    <div>
      <h2>Error Handling Demo</h2>
      <button onClick={handleClick}>Trigger Error</button>
    </div>
  );
};

export default ErrorDemo;