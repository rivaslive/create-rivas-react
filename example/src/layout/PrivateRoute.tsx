import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ROUTES from 'config/routes';
import { useAuth } from 'context/AuthContext';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [passAuth, setPassAuth] = useState(false);
  const { isAuthenticated, loadingAuth } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      setPassAuth(false);
      router?.push(ROUTES.HOME.path);
    } else {
      setPassAuth(true);
    }
  }, [isAuthenticated, router]);

  if (loadingAuth || !isAuthenticated) return null;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (passAuth) return <>{children}</>;

  return null;
};

export default PrivateRoute;
