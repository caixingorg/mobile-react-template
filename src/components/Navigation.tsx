import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import { AppOutline, UserOutline } from 'antd-mobile-icons';
import { useTranslation } from 'react-i18next';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const tabs = [
    {
      key: '/',
      title: t('home'),
      icon: <AppOutline />,
    },
    {
      key: '/about',
      title: t('about'),
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar activeKey={location.pathname} onChange={(key) => navigate(key)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default Navigation;