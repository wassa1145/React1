import React from 'react';
// import { within, userEvent } from '@storybook/testing-library';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { App } from './App';

export default {
  title: 'MyComponents/Page',
  component: App,
}as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const EmptyPage = Template.bind({});

// с play падают тесты

// export const InteractionPage = Template.bind({});
// InteractionPage.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   await userEvent.type(canvas.getByTestId('textarea'), 'Какой-то текст', {
//     delay: 100,
//   });
//   const submitButton = await canvas.getByTestId('submit-button');
//   await userEvent.click(submitButton);
// };