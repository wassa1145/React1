import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from './List';

export default {
  title: 'MyComponents/List',
  component: List,
  // argTypes: {
  //   onListClick: { action: 'click' },
  // },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Messages = Template.bind({});
Messages.args = {
  messages: [
    { author: 'User', value: 'Сообщение 1', id: '1' },
    {
      author: 'Mr. Robot',
      value: 'Мы получили ваше сообщение! В ближайшее время мы вам ответим.',
      systemMessage: true,
      id: '2',
    },
    { author: 'User', value: 'Сообщение 2', id: '3' },
    {
      author: 'Mr. Robot',
      value: 'Мы получили ваше сообщение! В ближайшее время мы вам ответим.',
      systemMessage: true,
      id: '4',
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  messages: [],
};
