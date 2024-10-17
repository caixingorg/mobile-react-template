import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Button } from 'antd-mobile';

interface AnimatedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick, children }) => {
  const [props, set] = useSpring(() => ({
    scale: 1,
  }));

  return (
    <animated.div
      style={{
        transform: props.scale.to(s => `scale(${s})`),
      }}
      onMouseDown={() => set({ scale: 0.9 })}
      onMouseUp={() => set({ scale: 1 })}
      onMouseLeave={() => set({ scale: 1 })}
    >
      <Button onClick={onClick}>{children}</Button>
    </animated.div>
  );
};

export default AnimatedButton;