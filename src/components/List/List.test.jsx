import React from 'react';
import { List } from './List';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('List', () => {
  it('render component', () => {
    const messages = [
      { author: 'Bot', message: 'new message' },
      { author: 'User', message: 'user message' },
    ];
    render(<List messages={messages} />);
    expect(screen.getByTestId('messages-list')).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const messages = [
      { author: 'Bot', message: 'new message' },
      { author: 'User', message: 'user message' },
    ];
    const { asFragment } = render(<List messages={messages} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('check rendering message', () => {
    const messages = [{ author: 'Bot', message: 'test' }];
    render(<List messages={messages} />);
    expect(screen.getByText(/test/)).toBeInTheDocument();
    expect(screen.getByText(/Bot/)).toBeInTheDocument();
  });

  it('count messages', () => {
    const messages = [
      { author: 'Bot', message: 'new message' },
      { author: 'User', message: 'new message2' },
      { author: 'User', message: 'new message3' },
    ];
    render(<List messages={messages} />);
    expect(screen.queryAllByRole('message').length).toBe(3);
  });
});
