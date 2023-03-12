import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { PageError } from './page-error';

export default {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator('light')];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator('dark')];
