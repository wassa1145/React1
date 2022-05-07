import React from 'react';
import { Form } from './Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<Form />);
});

describe('Form', () => {
  it('render component', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render textarea and button', () => {
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('clear textarea on subbmit', async () => {
    await userEvent.type(screen.getByRole('textbox'), 'new message');
    await userEvent.click(screen.getByTestId('submit-button'));
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});
