import React from 'react';
import './Button.css';

export const Button = (props) => {
  return (
    <button
      className="form__button"
      disabled={props.disabled}
      data-testid="submit-button"
      type="submit"
    >
      {props.name}
    </button>
  );
};
