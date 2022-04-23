import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatList } from './ChatList';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'MyComponents/ChatList',
  component: ChatList,
  argTypes: {
    onAddChat: { action: 'click' },
    deleteChat: { action: 'click' },
  },
} as ComponentMeta<typeof ChatList>;

const Template: ComponentStory<typeof ChatList> = (args) => (
  <BrowserRouter>
    <ChatList {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  chats: [
    { id: '1', name: 'First' },
    { id: '2', name: 'Second' },
    { id: '3', name: 'Third' },
  ],
};
