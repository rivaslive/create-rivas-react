import { useCallback, useMemo } from 'react';

const defaultOpts = {
  type: 'local',
  encrypt: true,
};

// session is enum 'local' | 'session'
const resolveProvider = {
  local: window.localStorage,
  session: window.sessionStorage,
};

/*
* opts can be
* {
*   type: 'local' | 'session';
*   encrypt: true | false;
* }
*/
export const useStorage = (key, opts = {}) => {
  const options = useMemo(() => {
    return {
      ...defaultOpts,
      ...opts,
    };
  }, [opts]);

  const setItem = useCallback(
    (value) => {
      try {
        let val;
        if (typeof value === 'object') {
          val = JSON.stringify(value);
        } else {
          val = value;
        }

        if (options.encrypt) {
          // encrypt value
        }

        resolveProvider[options.type].setItem(key, val);

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    [key, options]
  );

  const getItem = useCallback(() => {
    const value = resolveProvider[options.type].getItem(key);

    if (options.encrypt) {
      // encrypt value
    }

    if (!value) return null;

    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }, [key, options]);

  const removeItem = useCallback(() => {
    try {
      resolveProvider[options.type].removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }, [key, options]);

  return useMemo(() => {
    return {
      setItem,
      getItem,
      removeItem,
    };
  }, [setItem, getItem, removeItem]);
};
