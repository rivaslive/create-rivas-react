import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import storage from 'utils/storage';

const userDefault = {
  name: 'Kevin Rivas',
  email: 'kevin.rivaslive@gmail.com',
  jwt: '...',
};

const defaultValue = {
  isAuthenticated: false,
  user: null,
  loading: false,
  loadingAuth: false,
  logout: () => {},
  login: (_email, _password) => new Promise(() => {}),
  signUp: (_data) => new Promise(() => {}),
};

const AuthContext = createContext(defaultValue);

const ONE_SECOND = 1000;
const AUTH_KEY = '@auth';

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [user, setUser] = useState(null);

  const persisUser = useCallback((user) => {
    storage.setItem(AUTH_KEY, user);
  }, []);

  const login = useCallback(
    async (_email, _password) => {
      setLoading(true);
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(userDefault);
        }, ONE_SECOND);
      });

      setLoading(false);
      if (data) {
        persisUser(data);
        setUser(data);
      }
    },
    [persisUser],
  );

  const signUp = useCallback(
    async (_payload) => {
      setLoading(true);
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(userDefault);
        }, ONE_SECOND);
      });

      setLoading(false);
      if (data) {
        persisUser(data);
        setUser(data);
      }
    },
    [persisUser],
  );

  const logout = useCallback(() => {
    storage.removeItem(AUTH_KEY);
    setUser(null);
  }, []);

  useEffect(() => {
    const data = storage.getItem(AUTH_KEY);
    if (data) setUser(data);
    setLoadingAuth(false);
  }, []);

  const out = useMemo(() => {
    return {
      user,
      login,
      signUp,
      loading,
      logout,
      loadingAuth,
      isAuthenticated: !!user,
    };
  }, [user, loading, login, signUp, loadingAuth, logout]);

  return <AuthContext.Provider value={out}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
