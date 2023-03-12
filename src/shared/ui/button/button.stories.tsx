import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';
import 'app/styles/index.scss';

export default {
  title: 'ui/button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};
Primary.decorators = [ThemeDecorator('dark')];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: 'clear',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: 'outlined',
};

export const Backgrounded = Template.bind({});
Backgrounded.args = {
  children: 'Text',
  theme: 'background',
};

export const BackgroundedInverted = Template.bind({});
BackgroundedInverted.args = {
  children: 'Text',
  theme: 'backgroundInverted',
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: 'background',
  square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: 'background',
  square: true,
  size: 'l',
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: 'background',
  square: true,
  size: 'xl',
};

export const ButtonM = Template.bind({});
ButtonM.args = {
  children: 'Text',
  theme: 'background',
  size: 'm',
};

export const ButtonL = Template.bind({});
ButtonL.args = {
  children: 'Text',
  theme: 'background',
  size: 'l',
};

export const ButtonXL = Template.bind({});
ButtonXL.args = {
  children: 'Text',
  theme: 'background',
  size: 'xl',
};
