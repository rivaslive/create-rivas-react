import { useEffect } from 'react';
import { useAuth } from 'context/AuthContext';

function Logout() {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, [logout]);

  return null;
}

export default Logout;
