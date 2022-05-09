import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form } from './Form';
import { Provider } from 'react-redux';
import { store } from 'src/store';

export default {
  title: 'MyComponents/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
  <Provider store={store}>
    <Form {...args} />
  </Provider>
);
export const MessageForm = Template.bind({});
