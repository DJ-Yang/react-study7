import React, { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContenxt.Consumer랑 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorContext 내보내기
export { ColorProvider, ColorConsumer };

// 정적인 context 사용법
// const ColorContext = createContext({ color: 'black' });

export default ColorContext;
