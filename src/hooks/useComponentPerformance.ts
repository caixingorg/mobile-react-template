import { useEffect, useRef } from 'react';

const useComponentPerformance = (componentName: string) => {
  const startTime = useRef(performance.now());

  useEffect(() => {
    const endTime = performance.now();
    const duration = endTime - startTime.current;
    console.log(`${componentName} rendered in ${duration.toFixed(2)}ms`);

    return () => {
      const unmountTime = performance.now();
      const lifetimeDuration = unmountTime - startTime.current;
      console.log(`${componentName} lifetime: ${lifetimeDuration.toFixed(2)}ms`);
    };
  }, [componentName]);
};

export default useComponentPerformance;