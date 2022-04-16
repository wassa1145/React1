import React from 'react';
import './List.css';

export const List = (props) => (
  <div className="list" ref={props.refEl} data-testid="messages-list">
    <ul>
      {props.messages.map((message, index) => (
        <li
          key={index}
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
