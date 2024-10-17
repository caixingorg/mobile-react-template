import React from 'react';
import { useTranslation } from 'react-i18next';
import Counter from '../components/Counter';
import UserList from '../components/UserList';
import UtilsDemo from '../components/UtilsDemo';
import ErrorDemo from '../components/ErrorDemo';
import ExpensiveCalculation from '../components/ExpensiveCalculation';
import LanguageSwitcher from '../components/LanguageSwitcher';
import PerformancePanel from '../components/PerformancePanel';
import SecureInput from '../components/SecureInput';
import AnimatedCard from '../components/AnimatedCard';
import AnimatedList from '../components/AnimatedList';
import AnimatedButton from '../components/AnimatedButton';
import UserForm from '../components/UserForm';
import FileUpload from '../components/FileUpload';


const Home: React.FC = () => {
  const { t } = useTranslation();
  const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <LanguageSwitcher />
      <Counter />
      <UserList />
      <UtilsDemo />
      <ErrorDemo />
      <ExpensiveCalculation />
      <PerformancePanel />
      <SecureInput/>
      <AnimatedCard title="Animated Card" content="This card fades in" />
      <AnimatedList items={listItems} />
      <AnimatedButton onClick={() => alert('Clicked!')}>
        Animated Button
      </AnimatedButton>
      <UserForm />
      <FileUpload></FileUpload>
    </div>
  );
};

export default Home;