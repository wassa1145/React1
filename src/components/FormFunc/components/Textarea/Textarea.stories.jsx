import React from 'react';

import { Textarea } from './Textarea';

export default {
  title: 'MyComponents/Textarea',
  component: Textarea,
};

const Template = (args) => <Textarea {...args} />;

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Введите сообщение',
};

export const Filling = Template.bind({});
Filling.args = {
  placeholder: 'Введите сообщение',
  message: 'Новое сообщение',
};
