import React, { FC, useState } from 'react';
import { ThemeContext, defaultContext } from 'src/utils/ThemeContext';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import { AppRouter } from 'src/AppRouter/AppRouter';
import { Provider } from 'react-redux';
import { persistor, store } from 'src/store';
import { BrowserRouter } from 'react-router-dom';

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeContext.Provider>
  );
};
