import React from 'react';

import { List } from './List';

export default {
  title: 'MyComponents/List',
  component: List,
  // argTypes: {
  //   onListClick: { action: 'click' },
  // },
};

const Template = (args) => <List {...args} />;

export const Messages = Template.bind({});
Messages.args = {
  messages: [
    { author: 'User', message: 'Сообщение 1' },
    {
      author: 'Mr. Robot',
      message: 'Мы получили ваше сообщение! В ближайшее время мы вам ответим.',
      systemMessage: true,
    },
    { author: 'User', message: 'Сообщение 2' },
    {
      author: 'Mr. Robot',
      message: 'Мы получили ваше сообщение! В ближайшее время мы вам ответим.',
      systemMessage: true,
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  messages: [],
};
