import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd-mobile';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('zh')}>中文</Button>
    </div>
  );
};

export default LanguageSwitcher;