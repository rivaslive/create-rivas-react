import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import NotFound from 'pages/404';
import Logout from 'pages/Logout';
import ROUTES from 'config/routes';
import Dashboard from 'pages/Dashboard';
import { AuthProvider } from 'context/AuthContext';
import PublicRoute from 'components/Atoms/PublicRoute';
import PrivateRoute from 'components/Atoms/PrivateRoute';

const Routes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ReactRoutes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/app" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
          </Route>

          <Route path="/auth" element={<PrivateRoute />}>
            <Route path={ROUTES.LOGOUT.relativePath} element={<Logout />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </ReactRoutes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Routes;
