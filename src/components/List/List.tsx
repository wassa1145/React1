import React, { FC } from 'react';
import './List.css';

interface Message {
  id: string;
  author: string;
  message: string;
  systemMessage?: boolean;
}

interface MessagesListProps {
  messages: Message[];
  listEl?: React.RefObject<HTMLInputElement>;
}

export const List: FC<MessagesListProps> = ({ messages, listEl }) => (
  <div className="list" data-testid="messages-list" ref={listEl}>
    <ul>
      {messages.map((message) => (
        <li
          key={message.id}
          className={message.systemMessage ? 'system-message' : 'message'}
          role="message"
        >
          <p className="message__author">{message.author}</p>
          <p className="message__text">{message.message}</p>
        </li>
      ))}
    </ul>
  </div>
);
