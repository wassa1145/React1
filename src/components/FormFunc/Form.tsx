import React, { useState, useEffect, FC, memo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { ChatsState } from 'src/store/chats/reducer';
import { AddMessage } from 'src/store/chats/types';
import { CONSTANTS } from 'src/constants';
import { addMessageWithReply } from 'src/store/chats/slice';
import { Button } from 'src/components/FormFunc/components/Button/Button';
import { Textarea } from 'src/components/FormFunc/components/Textarea/Textarea';
import './Form.css';

export const Form: FC = memo(() => {
  const [message, setMessage] = useState('');
  const textFieldRef = useRef<HTMLInputElement>(null);
  const { chatId } = useParams();
  const dispatch =
    useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMessage>>>();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chatId && message) {
      dispatch(
        addMessageWithReply({
          chatId,
          message: { author: CONSTANTS.USER, value: message },
        })
      );
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
