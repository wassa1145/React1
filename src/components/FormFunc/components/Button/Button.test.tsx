import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('render component', () => {
    render(<Button name="Отправить" disabled={false} />);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Button name="Отправить" disabled={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Button name="Отправить" disabled={false} />);
    expect(screen.getByText(/Отправить/)).toBeInTheDocument();
  });

  it('button is disabled', () => {
    render(<Button name="Отправить" disabled={true} />);
    expect(screen.getByTestId('submit-button')).toBeDisabled();
  });
});
