import React from 'react';
import { App } from './App';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@storybook/testing-library';

beforeEach(() => {
  render(<App />);
});

describe('App', () => {
  it('render with snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render form and messages list', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('messages-list')).toBeInTheDocument();
  });

  it('clear textarea on submit', async () => {
    await userEvent.type(screen.getByRole('textbox'), 'new message');
    await userEvent.click(screen.getByTestId('submit-button'));
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('add message on submit', async () => {
    const countMessages = screen.queryAllByRole('message').length;
    await userEvent.type(screen.getByRole('textbox'), 'new message');
    await userEvent.click(screen.getByTestId('submit-button'));
    expect(screen.queryAllByRole('message').length).toBe(countMessages + 1);
  });

  it('add system message', async () => {
    const countMessages = screen.queryAllByRole('message').length;
    await userEvent.type(screen.getByRole('textbox'), 'new message');
    await userEvent.click(screen.getByTestId('submit-button'));
    await waitFor(
      () =>
        expect(screen.queryAllByRole('message').length).toBe(countMessages + 2),
      {
        timeout: 1500,
      }
    );
  });
});
