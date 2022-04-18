import React from 'react';
import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('render component', () => {
    render(<Button name="Отправить"/>);
  });

  it('render with snapshot', () => {
    const { asFragment } = render(<Button name="Отправить"/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render component with text', () => {
    render(<Button name="Отправить" />);
    expect(screen.getByText(/Отправить/)).toBeInTheDocument();
  });

  it('button is disabled', () => {
    render(<Button name="Отправить" disabled />);
    expect(screen.getByTestId('submit-button')).toBeDisabled();
  });
});
