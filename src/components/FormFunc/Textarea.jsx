import React from 'react';

export const Textarea = (props) => {
  return (
    <textarea
      rows="6"
      className="form__textarea"
      placeholder={props.placeholder}
      value={props.message}
      onChange={props.change}
    />
  );
};
