import React from 'react';
import { ChatList } from './ChatList';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('ChatList', () => {
  const chats = [
    { id: '1', name: 'First' },
    { id: '2', name: 'Second' },
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ChatList chats={chats} onAddChat={jest.fn()} deleteChat={jest.fn()} />
      </BrowserRouter>
    );
  });

  it('render component', () => {
    expect(screen.getByTestId('chat-list')).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ChatList chats={chats} onAddChat={jest.fn()} deleteChat={jest.fn()} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    expect(screen.getByText(/First/)).toBeInTheDocument();
  });
});
