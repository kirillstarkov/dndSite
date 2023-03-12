import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from './button';

describe('button', () => {
  test('without params', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('with theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme="clear">TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
