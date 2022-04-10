import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { Textarea } from './Textarea';
import { Input } from './Input';
import { List } from './List';

export const Form = () => {
  const [name] = useState('Отправить');
  const [inputPlaceholder] = useState('Введите ваше имя');
  const [defaultMessage] = useState(
    'Мы получили ваше сообщение! В ближайшее время мы вам ответим.'
  );
  const [defaultAuthor] = useState('Mr. Robot');
  const [textareaPlaceholder] = useState('Введите сообщение');
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [messageList, setMessageList] = useState([]);
  const listEl = useRef(null);

  const handleClick = () => {
    setMessageList([...messageList, { message, author, systemMessage: false }]);
    setMessage('');
    setAuthor('');
  };
  const changeАuthor = (event) => {
    setAuthor(event.target.value);
  };
  const changeMessage = (event) => {
    setMessage(event.target.value);
  };
  const scrollList = () => {
    listEl.current.scrollTop = listEl.current.scrollHeight;
  };
  useEffect(() => {
    if (
      messageList.length &&
      !messageList[messageList.length - 1].systemMessage
    ) {
      setTimeout(() => {
        setMessageList([
          ...messageList,
          {
            message: defaultMessage,
            author: defaultAuthor,
            systemMessage: true,
          },
        ]);
      }, 1000);
    }
    scrollList();
  }, [messageList.length]);

  return (
    <div className="content">
      {<List messages={messageList} refEl={listEl} />}
      <div className="form">
        <div className="form__wrapper">
          <Input
            placeholder={inputPlaceholder}
            author={author}
            change={changeАuthor}
          />
          <Textarea
            change={changeMessage}
            message={message}
            placeholder={textareaPlaceholder}
          />
        </div>
        <Button
          name={name}
          click={handleClick}
          disabled={message && author ? false : true}
        />
      </div>
    </div>
  );
};
