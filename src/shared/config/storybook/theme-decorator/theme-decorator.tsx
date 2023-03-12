import { Story } from '@storybook/react';
import { Theme } from 'app/providers/theme-provider/lib/theme-context';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
