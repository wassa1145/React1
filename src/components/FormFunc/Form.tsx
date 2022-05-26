import React, { useState, useEffect, FC, memo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CONSTANTS } from 'src/constants';
import { nanoid } from 'nanoid';
import { Button } from 'src/components/FormFunc/components/Button/Button';
import { Textarea } from 'src/components/FormFunc/components/Textarea/Textarea';
import './Form.css';
import { push } from 'firebase/database';
import { getMessageListById } from 'src/services/firebase';

export const Form: FC = memo(() => {
  const [message, setMessage] = useState('');
  const textFieldRef = useRef<HTMLInputElement>(null);
  const { chatId } = useParams();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chatId && message) {
      const id = nanoid();
      push(getMessageListById(chatId), {
        author: CONSTANTS.USER,
        id,
        value: message,
      });
    }
    setMessage('');
    textFieldRef.current?.focus();
  };

  useEffect(() => {
    textFieldRef.current?.focus();
  }, []);

  return (
    <form className="form" onSubmit={handleClick} data-testid="form">
      <Textarea
        change={(event) => setMessage(event.target.value)}
        message={message}
        textFieldRef={textFieldRef}
        placeholder="Введите сообщение"
      />
      <Button name="Отправить" disabled={!message} />
    </form>
  );
});
