import React, {
  useState,
  useCallback,
  useEffect,
  FC,
  memo,
  useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessage } from '../../store/chats/actions';
import { Button } from './components/Button/Button';
import { Textarea } from './components/Textarea/Textarea';
import './Form.css';

export const Form: FC = memo(() => {
  const [message, setMessage] = useState('');
  const textFieldRef = useRef<HTMLInputElement>(null);
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chatId) {
      dispatch(addMessage(chatId, message));
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
