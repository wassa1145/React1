import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppRouter } from './AppRouter';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import '../App.css';

export default {
  title: 'MyComponents/Page',
  component: AppRouter,
} as ComponentMeta<typeof AppRouter>;

const Template: ComponentStory<typeof AppRouter> = (args) => (
  <Provider store={store}>
    <MemoryRouter>
      <AppRouter {...args} />
    </MemoryRouter>
  </Provider>
);

export const Pages = Template.bind({});
