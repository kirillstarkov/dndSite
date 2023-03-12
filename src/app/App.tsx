import { Suspense } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { AppRouter } from 'app/providers/router';

import './styles/index.scss';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { useTheme } from './providers/theme-provider';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
