import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from './Textarea';

export default {
  title: 'MyComponents/Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Введите сообщение',
};

export const Filling = Template.bind({});
Filling.args = {
  placeholder: 'Введите сообщение',
  message: 'Новое сообщение',
};
