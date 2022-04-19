import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatList } from './ChatList';

export default {
  title: 'MyComponents/ChatList',
  component: ChatList,
  argTypes: {
    onButtonClick: { action: 'click' },
  },
} as ComponentMeta<typeof ChatList>;

const Template: ComponentStory<typeof ChatList> = (args) => <ChatList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  chats: [
    { id: '1', name: 'First' },
    { id: '2', name: 'Second' },
    { id: '3', name: 'Third' },
  ],
};
