import React from 'react';

export const Input = (props) => {
  return (
    <input
      type="text"
      className="form__input"
      placeholder={props.placeholder}
      value={props.author}
      onChange={props.change}
    />
  );
};
