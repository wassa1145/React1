import React from 'react';
import { ChatList } from './ChatList';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('ChatList', () => {
  const chats = [
    { id: '1', name: 'First' },
    { id: '2', name: 'Second' },
  ];

  beforeEach(() => {
    render(
      <MemoryRouter>
        <ChatList />
      </MemoryRouter>
    );
  });

  it('render component', () => {
    expect(screen.getByTestId('chat-list')).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ChatList />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    expect(screen.getByText(/First/)).toBeInTheDocument();
  });
});
