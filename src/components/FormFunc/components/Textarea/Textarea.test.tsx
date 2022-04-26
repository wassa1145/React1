import React from 'react';
import { Textarea } from './Textarea';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<Textarea change={jest.fn()} placeholder="Введите сообщение" />);
});

describe('Textarea', () => {
  it('render component', () => {
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(
      <Textarea change={jest.fn()} message="" placeholder="Введите сообщение" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component', () => {
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
  });

  it('input text', async () => {
    await userEvent.type(screen.getByRole('textbox'), 'new message');
    expect(screen.getByRole('textbox')).toHaveValue('new message');
  });
});
