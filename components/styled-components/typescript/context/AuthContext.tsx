import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import storage from 'utils/storage';

type PayloadSignUpType = {
  name: string;
  email: string;
  password: string;
};

type UserType = Omit<PayloadSignUpType, 'password'> & {
  id: string | number;
  jwt: string;
};

const userDefault: UserType = {
  id: '1',
  name: 'Kevin Rivas',
  email: 'kevin.rivaslive@gmail.com',
  jwt: '...',
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: null | UserType;
  loading: boolean;
  loadingAuth: boolean;
  logout: () => void;
  login: (email: string, password: string) => Promise<UserType | null>;
  signUp: (data: PayloadSignUpType) => Promise<UserType | null>;
};

const defaultValue: AuthContextType = {
  isAuthenticated: false,
  user: null,
  loading: false,
  loadingAuth: true,
  logout: () => {},
  login: () => new Promise(() => null),
  signUp: () => new Promise(() => null),
};

const AuthContext = createContext<AuthContextType>(defaultValue);

const ONE_SECOND = 1000;
const AUTH_KEY = '@auth';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [user, setUser] = useState<UserType | null>(null);

  const persisUser = useCallback((user: UserType) => {
    storage.setItem(AUTH_KEY, user);
  }, []);

  const login = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      const data = await new Promise<UserType>((resolve) => {
        setTimeout(() => {
          resolve(userDefault);
        }, ONE_SECOND);
      });

      setLoading(false);
      if (data) {
        persisUser(data);
        setUser(data);
        return data;
      }
      return null;
    },
    [persisUser],
  );

  const signUp = useCallback(
    async (payload: PayloadSignUpType) => {
      setLoading(true);
      const data = await new Promise<UserType>((resolve) => {
        setTimeout(() => {
          resolve(userDefault);
        }, ONE_SECOND);
      });

      setLoading(false);
      if (data) {
        persisUser(data);
        setUser(data);
        return data;
      }
      return null;
    },
    [persisUser],
  );

  const logout = useCallback(() => {
    storage.removeItem(AUTH_KEY);
    setUser(null);
  }, []);

  useEffect(() => {
    const data = storage.getItem<UserType | null>(AUTH_KEY);
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
