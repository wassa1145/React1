import React from 'react';
import { List } from './List';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('List', () => {
  it('render component', () => {
    const messages = [
      { author: 'Bot', value: 'new message', id: '1' },
      { author: 'User', value: 'user message', id: '2' },
    ];
    render(<List messages={messages} />);
    expect(screen.getByTestId('messages-list')).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const messages = [
      { author: 'Bot', value: 'new message', id: '1' },
      { author: 'User', value: 'user message', id: '2' },
    ];
    const { asFragment } = render(<List messages={messages} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('check rendering message', () => {
    const messages = [{ author: 'Bot', value: 'test', id: '1' }];
    render(<List messages={messages} />);
    expect(screen.getByText(/test/)).toBeInTheDocument();
    expect(screen.getByText(/Bot/)).toBeInTheDocument();
  });

  it('count messages', () => {
    const messages = [
      { author: 'Bot', value: 'new message', id: '1' },
      { author: 'User', value: 'new message2', id: '2' },
      { author: 'User', value: 'new message3', id: '3' },
    ];
    render(<List messages={messages} />);
    expect(screen.queryAllByRole('message').length).toBe(3);
  });
});
