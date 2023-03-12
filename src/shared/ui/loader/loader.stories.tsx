import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { Loader } from './loader';

export default {
  title: 'ui/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: 'link text',
};
Light.decorators = [ThemeDecorator('light')];

export const Dark = Template.bind({});
Dark.args = {
  children: 'link text',
};
Dark.decorators = [ThemeDecorator('dark')];
