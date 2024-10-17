import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks';
import { increment, decrement, incrementByAmount, incrementAsync } from '../store/counterSlice';
import { Button, Space } from 'antd-mobile';
import { useTranslation } from 'react-i18next';

const Counter: React.FC = React.memo(() => {
  const count = useAppSelector((state) => state.counter.value);
  const status = useAppSelector((state) => state.counter.status);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('counter')}: {count}</h2>
      <Space wrap>
        <Button onClick={() => dispatch(increment())}>{t('increment')}</Button>
        <Button onClick={() => dispatch(decrement())}>{t('decrement')}</Button>
        <Button onClick={() => dispatch(incrementByAmount(5))}>{t('add5')}</Button>
        <Button 
          onClick={() => dispatch(incrementAsync(1))}
          loading={status === 'loading'}
        >
          {t('addAsync')}
        </Button>
      </Space>
    </div>
  );
});

export default Counter;