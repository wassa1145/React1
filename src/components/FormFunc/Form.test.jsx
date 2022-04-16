import React from 'react';
import { Form } from './Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  render(<Form />);
  it('render component', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render textarea and button', () => {
    render(<Form />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('clear textarea on subbmit', async () => {
    const mockHandler = jest.fn();
    render(<Form addMessage={mockHandler} />);
    await userEvent.type(screen.getByTestId('textarea'), 'new message');
    await userEvent.click(screen.getByTestId('submit-button'));
    expect(screen.getByTestId('textarea')).toHaveValue('');
  });
});
