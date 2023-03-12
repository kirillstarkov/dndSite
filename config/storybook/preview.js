import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/styleDecorator/style-decorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/theme-decorator/theme-decorator';
import { RouterDecorator } from '../../src/shared/config/storybook/router-decorator/router-decorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator('light'));
addDecorator(RouterDecorator);
