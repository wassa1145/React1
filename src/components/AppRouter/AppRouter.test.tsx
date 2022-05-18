import React from 'react';
import { AppRouter } from './AppRouter';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/store';

beforeEach(() => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    </Provider>
  );
});

describe('App', () => {
  it('render with snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render header', () => {
    expect(screen.getAllByText(/Home/)[0]).toBeInTheDocument();
    expect(screen.getByText(/Chats/)).toBeInTheDocument();
    expect(screen.getAllByText(/Profile/)[0]).toBeInTheDocument();
  });

  it('navigates home when you click Home', () => {
    act(() => {
      const goHomeLink = document.querySelector('#home');
      goHomeLink?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(screen.getByText(/Home Page/)).toBeInTheDocument();
  });

  it('navigates chats when you click Chats', () => {
    act(() => {
      const goChatsLink = document.querySelector('#Chats');
      goChatsLink?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(screen.getByText(/Список чатов/)).toBeInTheDocument();
  });

  it('navigates About when you click About', () => {
    act(() => {
      const goChatsLink = document.querySelector('#About');
      goChatsLink?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(screen.getAllByText(/About/)[0]).toBeInTheDocument();
    expect(screen.getByText(/change visible/)).toBeInTheDocument();
  });

  it('navigates Profile when you click Profile', () => {
    act(() => {
      const goChatsLink = document.querySelector('#Profile');
      goChatsLink?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(screen.getByText(/Изменить тему/)).toBeInTheDocument();
  });
  it('lazy loading chats', () => {
    act(() => {
      const goChatsLink = document.querySelector('#Chats');
      goChatsLink?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    act(() => {
      const goChatLink = screen.getAllByTestId('chat-link')[0];
      goChatLink?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });
});
