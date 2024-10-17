import React, { useState, useEffect } from 'react';
import { Toast } from 'antd-mobile';

const OfflineStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      Toast.show({
        content: 'You are back online!',
        duration: 2000,
      });
    };

    const handleOffline = () => {
      setIsOnline(false);
      Toast.show({
        content: 'You are offline. Some features may be limited.',
        duration: 2000,
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: '5px', backgroundColor: isOnline ? 'green' : 'red', color: 'white', textAlign: 'center' }}>
      {isOnline ? 'Online' : 'Offline'}
    </div>
  );
};

export default OfflineStatus;