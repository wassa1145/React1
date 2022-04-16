import React from 'react';
import { Textarea } from './Textarea';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Textarea', () => {
  it('render component', () => {
    render(<Textarea />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Textarea />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component', () => {
    render(<Textarea />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
  });

  it('input text', async () => {
    render(<Textarea />);
    await userEvent.type(screen.getByTestId('textarea'), 'new message');
    expect(screen.getByTestId('textarea')).toHaveValue('new message');
  });
});
