import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Card } from 'antd-mobile';

interface AnimatedCardProps {
  title: string;
  content: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ title, content }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  return (
    <animated.div style={props}>
      <Card title={title}>
        <p>{content}</p>
      </Card>
    </animated.div>
  );
};

export default AnimatedCard;