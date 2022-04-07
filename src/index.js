import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App'; // указываем App в фигурных скобках, т.к к нас не дефоллтный импорт а именованный,
// если бы был дефолтный экспорт в компоненте App.js то импорт был бы тоже дефолтный без {}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

