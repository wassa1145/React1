import React, { FC } from 'react';
import { Button as ButtonUI } from '@mui/material';
import './Button.css';

interface ButtonProps {
  disabled: boolean;
  name: string;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <ButtonUI
      variant="outlined"
      className="form__button"
      disabled={props.disabled}
      data-testid="submit-button"
      type="submit"
    >
      {props.name}
    </ButtonUI>
  );
};
