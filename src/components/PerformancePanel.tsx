import React, { useState, useEffect } from 'react';
import { Card } from 'antd-mobile';
import { Metric, onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

const PerformancePanel: React.FC = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    cls: 0,
    fid: 0,
    ttfb: 0,
  });

  useEffect(() => {
    const reportWebVitals = (metric: Metric) => {
      setMetrics(prev => ({ ...prev, [metric.name.toLowerCase()]: metric.value }));
    };

    onCLS(reportWebVitals);
    onFID(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }, []);

  // ... rest of the component
};

export default PerformancePanel;
