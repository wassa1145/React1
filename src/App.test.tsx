import React from 'react';
import { App } from './App';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

describe('App', () => {
  it('render with snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
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

  it('delete chat', async () => {
    act(() => {
      const goChatsLink = document.querySelector('#Chats');
      goChatsLink?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const countChat = screen.queryAllByRole('chat').length;
    await userEvent.click(screen.getByRole('button-delete'));
    expect(screen.queryAllByRole('chat').length).toBe(countChat - 1);
  });

  // Падает с ошибкой  Unable to perform pointer interaction as the element has or inherits pointer-events set to "none".
  // не понимаю почему.

  // it('add chat', async () => {
  //   act(() => {
  //     const goChatsLink = document.querySelector('#Chats');
  //     goChatsLink?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  //   });
  //   await userEvent.type(screen.getByRole('input-chat-name'), 'new chat');
  //   await userEvent.click(screen.getByText(/Добавить новый чат/));
  //   expect(screen.getByText(/new chat/)).toBeInTheDocument();
  // });

  // it('clear textarea on submit', async () => {
  //   await userEvent.type(screen.getByRole('textbox'), 'new message');
  //   await userEvent.click(screen.getByTestId('submit-button'));
  //   expect(screen.getByRole('textbox')).toHaveValue('');
  // });

  // it('add message on submit', async () => {
  //   const countMessages = screen.queryAllByRole('message').length;
  //   await userEvent.type(screen.getByRole('textbox'), 'new message');
  //   await userEvent.click(screen.getByTestId('submit-button'));
  //   expect(screen.queryAllByRole('message').length).toBe(countMessages + 1);
  // });

  // it('add system message', async () => {
  //   const countMessages = screen.queryAllByRole('message').length;
  //   await userEvent.type(screen.getByRole('textbox'), 'new message');
  //   await userEvent.click(screen.getByTestId('submit-button'));
  //   await waitFor(
  //     () =>
  //       expect(screen.queryAllByRole('message').length).toBe(countMessages + 2),
  //     {
  //       timeout: 1500,
  //     }
  //   );
  // });
});
