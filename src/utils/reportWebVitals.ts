import type { ReportHandler } from 'web-vitals';

const reportWebVitals = async (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    try {
      const webVitals = await import('web-vitals');
      webVitals.getCLS(onPerfEntry);
      webVitals.getFID(onPerfEntry);
      webVitals.getFCP(onPerfEntry);
      webVitals.getLCP(onPerfEntry);
      webVitals.getTTFB(onPerfEntry);
    } catch (error) {
      console.error('Error loading web-vitals:', error);
    }
  }
};

export default reportWebVitals;