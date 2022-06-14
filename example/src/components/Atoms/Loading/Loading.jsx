import { LoadingStyle } from './style';

const Loading = ({
  className,
  top = 0,
  right = 0,
  size = '1rem',
  style = {},
  color = 'currentColor',
}) => {
  return (
    <LoadingStyle
      className={className}
      style={{
        ...style,
        color,
        marginTop: top,
        marginRight: right,
        fontSize: size,
      }}
    />
  );
};

export default Loading;
