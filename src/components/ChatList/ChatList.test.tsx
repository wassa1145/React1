import React from 'react';
import { ChatList } from './ChatList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ChatList', () => {
  const chats = [
    { id: '1', name: 'First' },
    { id: '2', name: 'Second' },
  ];

  beforeEach(() => {
    render(<ChatList chats={chats} />);
  });

  it('render component', () => {
    expect(screen.getByTestId('chat-list')).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<ChatList chats={chats} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    expect(screen.getByText(/Second/)).toBeInTheDocument();
  });
});
