import type { ReportHandler } from 'web-vitals';

const reportWebVitals = async (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    try {
      const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import('web-vitals');
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    } catch (error) {
      console.error('Error loading web-vitals:', error);
    }
  }
};

export default reportWebVitals;