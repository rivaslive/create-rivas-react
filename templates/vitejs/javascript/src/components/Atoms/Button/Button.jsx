import Loading from 'components/Atoms/Loading';
import { ButtonStyle } from './style';

const Button = ({
  children,
  type,
  onClick,
  disabled,
  loading,
  rounded = false,
  variant = 'default', // default | link | outline | tag
  fontWeight = 'bold',
  margin = 'initial',
  color = variant === 'link' ? 'primary' : 'white',
  bgColor = variant === 'link' ? 'transparent' : 'primary',
  borderColor = 'transparent',
  ...restProps
}) => {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      variant={variant}
      $isRounded={rounded}
      disabled={disabled}
      $isLoading={loading}
      $color={color}
      $margin={margin}
      $fontWeight={fontWeight}
      $borderColor={borderColor}
      $bgColor={bgColor}
      {...restProps}
    >
      {loading && <Loading size="1.2rem" right={7} />}
      {children}
    </ButtonStyle>
  );
};

export default Button;
