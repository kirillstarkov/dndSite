import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { AppLink } from './app-link';

export default {
  title: 'ui/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'link text',
  theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'link text',
  theme: 'secondary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'link text',
  theme: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator('dark')];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'link text',
  theme: 'secondary',
};
SecondaryDark.decorators = [ThemeDecorator('dark')];
