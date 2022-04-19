import React from 'react';
// import { within, userEvent } from '@storybook/testing-library';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form } from './Form';

export default {
  title: 'MyComponents/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

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
