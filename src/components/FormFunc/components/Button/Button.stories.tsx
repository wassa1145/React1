import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'MyComponents/Button',
  component: Button,
  argTypes: {
    onButtonClick: { action: 'click' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  name: 'Отправить',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  name: 'Отправить',
};
