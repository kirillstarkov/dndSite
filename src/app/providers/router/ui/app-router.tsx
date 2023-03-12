import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config/route-config';
import { PageLoader } from 'widgets/page-loader';

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          path={path}
          element={<div className="page-wrapper">{element}</div>}
          key={path}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
