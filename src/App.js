import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
// {, }를 붙일 때와 안붙일 때의 차이점이 뭘까?
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

// Provider 를 사용해줄 때는 value 값을 무조건 지정해주어야 한다.
const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
