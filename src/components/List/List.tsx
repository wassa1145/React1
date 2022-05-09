import React, { FC } from 'react';
import { CONSTANTS } from '../../constants';
import './List.css';

interface Message {
  id: string;
  author: string;
  value: string;
}

interface MessagesListProps {
  messages: Message[];
  listEl?: React.RefObject<HTMLInputElement>;
}

export const List: FC<MessagesListProps> = ({ messages, listEl }) => (
  <div data-testid="messages-list" ref={listEl}>
    <ul>
      {messages.map((message) => (
        <li
          key={message.id}
          className={
            message.author === CONSTANTS.BOT ? 'system-message' : 'message'
          }
          role="message"
        >
          <p className="message__author">{message.author}</p>
          <p className="message__text">{message.value}</p>
        </li>
      ))}
    </ul>
  </div>
);
