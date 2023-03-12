import { ButtonHTMLAttributes } from 'react';

type ButtonTheme = 'clear' | 'background' | 'outlined' | 'backgroundInverted';
type ButtonSize = 's' | 'm' | 'l' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}
