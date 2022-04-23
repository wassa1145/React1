import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { App } from './App';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'MyComponents/Page',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => (
  <MemoryRouter>
    <App {...args} />
  </MemoryRouter>
);

export const EmptyPage = Template.bind({});
