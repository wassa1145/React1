import React, { useState, useCallback } from 'react';
import { Button } from './components/Button/Button';
import { Textarea } from './components/Textarea/Textarea';
import './Form.css';

export const Form = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    addMessage(message);
    setMessage('');
  };
  const changeMessage = useCallback((event) => {
    setMessage(event.target.value);
  }, []);

  return (
    <form className="form" onSubmit={handleClick} data-testid="form">
      <Textarea
        change={changeMessage}
        message={message}
        placeholder="Введите сообщение"
      />
      <Button name="Отправить" disabled={!message} />
    </form>
  );
};
