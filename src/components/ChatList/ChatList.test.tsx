import React from 'react';
import { ChatList } from './ChatList';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import userEvent from '@testing-library/user-event';

describe('ChatList', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ChatList />
        </MemoryRouter>
      </Provider>
    );
  });

  it('render component', () => {
    expect(screen.getByTestId('chat-list')).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ChatList />
        </MemoryRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('add chat', async () => {
    const countChat = screen.queryAllByRole('chat').length;
    await userEvent.type(screen.getByRole('textbox'), 'new chat');
    await userEvent.click(
      screen.getAllByRole('button', { name: /Добавить новый чат/ })[0]
    );
    expect(screen.getByText(/new chat/)).toBeInTheDocument();
    expect(screen.queryAllByRole('chat').length).toBe(countChat + 1);
  });

  it('delete chat', async () => {
    const count = screen.queryAllByRole('chat').length;
    await userEvent.click(screen.getAllByRole('button-delete')[0]);
    expect(screen.queryAllByRole('chat').length).toBe(count - 1);
  });

  it('clear textarea on submit', async () => {
    await userEvent.type(screen.getByRole('textbox'), 'chat name');
    await userEvent.click(
      screen.getAllByRole('button', { name: /Добавить новый чат/ })[0]
    );
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});
