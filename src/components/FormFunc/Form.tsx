import React, {
  useState,
  useCallback,
  useEffect,
  FC,
  memo,
  useRef,
} from 'react';
import { Button } from './components/Button/Button';
import { Textarea } from './components/Textarea/Textarea';
import './Form.css';

interface FormProps {
  addMessage: (a: string) => void;
}

export const Form: FC<FormProps> = memo(({ addMessage }) => {
  const [message, setMessage] = useState('');
  const textFieldRef = useRef<HTMLInputElement>(null);
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMessage(message);
    setMessage('');
    textFieldRef.current?.focus();
  };
  const changeMessage = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(event.target.value);
    },
    []
  );

  useEffect(() => {
    textFieldRef.current?.focus();
  }, []);

  return (
    <form className="form" onSubmit={handleClick} data-testid="form">
      <Textarea
        change={changeMessage}
        message={message}
        textFieldRef={textFieldRef}
        placeholder="Введите сообщение"
      />
      <Button name="Отправить" disabled={!message} />
    </form>
  );
});
