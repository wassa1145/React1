import React from 'react';

export const Message = (props) => {
  return (
    <>
      <p className="message__author">{props.message.author}</p>
      <p className="message__text">{props.message.message}</p>
    </>
  );
};
