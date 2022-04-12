import React from 'react';
import { Message } from './Message';

export const List = (props) => {
  return (
    <div className="list" ref={props.refEl}>
      <ul>
        {props.messages.map((message, index) => (
          <li
            key={index}
            className={message.systemMessage ? 'system-message' : 'message'}
          >
            <Message message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};
