import React, { useState } from 'react';
import { Profile } from './Profile';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import userEvent from '@testing-library/user-event';
import { defaultContext, ThemeContext } from 'src/utils/ThemeContext';

describe('App', () => {
  it('render with snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('change name', async () => {
    render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    await userEvent.type(screen.getByRole('textbox'), 'new name');
    await userEvent.click(
      screen.getAllByRole('button', { name: /Изменить имя/ })[0]
    );
    expect(screen.getByText(/new name/)).toBeInTheDocument();
  });

  it('toggle theme', async () => {
    const ThemeProfile = () => {
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
            <Profile />
          </Provider>
        </ThemeContext.Provider>
      );
    };
    render(<ThemeProfile />);

    expect(screen.getByText(/Светлая/)).toBeInTheDocument();
    await userEvent.click(
      screen.getAllByRole('button', { name: /Изменить тему/ })[0]
    );
    expect(screen.getByText(/Темная/)).toBeInTheDocument();
  });
});
