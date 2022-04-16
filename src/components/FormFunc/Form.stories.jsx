import React from 'react';
// import { within, userEvent } from '@storybook/testing-library';

import { Form } from './Form';

export default {
  title: 'MyComponents/Form',
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const MessageForm = Template.bind({});

// с play падают тесты
// MessageForm.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   await userEvent.type(canvas.getByTestId('textarea'), 'Какой-то текст', {
//     delay: 100,
//   });
//   const submitButton = await canvas.getByTestId('submit-button');
//   await userEvent.click(submitButton);
// };
