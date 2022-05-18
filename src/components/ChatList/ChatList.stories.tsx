import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChatList } from './ChatList';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/store';

export default {
  title: 'MyComponents/ChatList',
  component: ChatList,
  argTypes: {
    onAddChat: { action: 'click' },
    deleteChat: { action: 'click' },
  },
} as ComponentMeta<typeof ChatList>;

const Template: ComponentStory<typeof ChatList> = (args) => (
  <Provider store={store}>
    <MemoryRouter>
      <ChatList {...args} />
    </MemoryRouter>
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  chats: [
    { id: '1', name: 'First' },
    { id: '2', name: 'Second' },
    { id: '3', name: 'Third' },
  ],
};
