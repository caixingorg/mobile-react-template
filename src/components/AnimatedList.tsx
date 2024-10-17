import React from 'react';
import { useTrail, animated } from 'react-spring';
import { List } from 'antd-mobile';

interface AnimatedListProps {
  items: string[];
}

const AnimatedList: React.FC<AnimatedListProps> = ({ items }) => {
  const trail = useTrail(items.length, {
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(-20px)' },
  });

  return (
    <List header="Animated List">
      {trail.map((props, index) => (
        <animated.div key={items[index]} style={props}>
          <List.Item>{items[index]}</List.Item>
        </animated.div>
      ))}
    </List>
  );
};

export default AnimatedList;