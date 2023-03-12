import { render } from 'react-dom';
import { ErrorBoundary } from 'app/providers/error-boundry';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/theme-provider';
import App from './app/App';

import './shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
