import * as React from 'react';
import classNames from 'classnames';
import useFlexGapSupport from 'hooks/useFlexGapSupport';

import RowContext from './RowContext';
import ResponsiveObserve, { responsiveArray } from './responsiveObserve';

const Row = React.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    justify,
    align,
    className,
    style,
    children,
    gutter = 0,
    wrap,
    ...others
  } = props;

  const [screens, setScreens] = React.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
  });

  const supportFlexGap = useFlexGapSupport();

  const gutterRef = React.useRef(gutter);

  // ================================== Effect ==================================
  React.useEffect(() => {
    const token = ResponsiveObserve.subscribe((screen) => {
      const currentGutter = gutterRef.current || 0;
      if (
        (!Array.isArray(currentGutter) && typeof currentGutter === 'object') ||
        (Array.isArray(currentGutter) &&
          (typeof currentGutter[0] === 'object' ||
            typeof currentGutter[1] === 'object'))
      ) {
        setScreens(screen);
      }
    });
    return () => ResponsiveObserve.unsubscribe(token);
  }, []);

  // ================================== Render ==================================
  const getGutter = () => {
    const results = [undefined, undefined];
    const normalizedGutter = Array.isArray(gutter)
      ? gutter
      : [gutter, undefined];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object') {
        for (let i = 0; i < responsiveArray.length; i += 1) {
          const breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g;
      }
    });
    return results;
  };

  const prefixCls = 'ant-row';
  const gutters = getGutter();
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-no-wrap`]: wrap === false,
      [`${prefixCls}-${justify}`]: justify,
      [`${prefixCls}-${align}`]: align,
    },
    className,
  );

  // Add gutter related style
  const rowStyle = {};
  const horizontalGutter =
    gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
  const verticalGutter =
    gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  if (supportFlexGap) {
    // Set gap direct if flex gap support
    [, rowStyle.rowGap] = gutters;
  } else if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }

  // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
  // So we deconstruct "gutters" variable here.
  const [gutterH, gutterV] = gutters;
  const rowContext = React.useMemo(
    () => ({
      gutter: [gutterH, gutterV],
      wrap,
      supportFlexGap,
    }),
    [gutterH, gutterV, wrap, supportFlexGap],
  );

  return (
    <RowContext.Provider value={rowContext}>
      <div
        {...others}
        ref={ref}
        className={classes}
        style={{ ...rowStyle, ...style }}
      >
        {children}
      </div>
    </RowContext.Provider>
  );
});

Row.displayName = 'Row';

export default Row;
